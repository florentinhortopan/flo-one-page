#!/bin/bash

# Script to compress large video files for Vercel deployment
# This will reduce file sizes to under 10MB each

ROOT_DIR="/Users/florentinhortopan/Documents/Flo-website/Simple-Flo"
TARGET_SIZE_MB=10

echo "Starting video compression for Vercel deployment..."

# Function to get file size in MB
get_file_size_mb() {
    stat -f "%z" "$1" | awk '{print $1/1024/1024}'
}

# Function to compress video using ffmpeg
compress_video() {
    local input_file="$1"
    local output_file="${input_file%.*}_compressed.${input_file##*.}"
    
    echo "Compressing: $(basename "$input_file")"
    echo "  Original size: $(get_file_size_mb "$input_file") MB"
    
    # Use ffmpeg to compress the video
    # Reduce quality and resolution to get under target size
    ffmpeg -i "$input_file" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart "$output_file" -y
    
    if [[ -f "$output_file" ]]; then
        new_size=$(get_file_size_mb "$output_file")
        echo "  Compressed size: $new_size MB"
        
        if (( $(echo "$new_size < $TARGET_SIZE_MB" | bc -l) )); then
            echo "  ✓ Compression successful, replacing original"
            mv "$output_file" "$input_file"
        else
            echo "  ✗ Still too large, trying more aggressive compression"
            rm "$output_file"
            # Try more aggressive compression
            ffmpeg -i "$input_file" -c:v libx264 -crf 32 -preset fast -c:a aac -b:a 96k -movflags +faststart "$output_file" -y
            
            if [[ -f "$output_file" ]]; then
                new_size=$(get_file_size_mb "$output_file")
                echo "  Final size: $new_size MB"
                mv "$output_file" "$input_file"
            fi
        fi
    else
        echo "  ✗ Compression failed"
    fi
}

# Find and compress large video files
find "$ROOT_DIR/popups" -name "*.mp4" -o -name "*.mov" -o -name "*.m4v" | while read -r video_file; do
    size_mb=$(get_file_size_mb "$video_file")
    
    if (( $(echo "$size_mb > $TARGET_SIZE_MB" | bc -l) )); then
        echo ""
        echo "Processing large video: $(basename "$video_file")"
        compress_video "$video_file"
    else
        echo "Skipping small video: $(basename "$video_file") ($size_mb MB)"
    fi
done

echo ""
echo "Video compression complete!"
