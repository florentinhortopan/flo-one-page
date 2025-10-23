#!/bin/bash

# Image optimization script using macOS sips
# Optimizes images over 1MB to under 500KB

echo "Starting image optimization..."

# List of large images identified (over 1MB)
LARGE_IMAGES=(
    "/Users/florentinhortopan/Documents/Flo-website/Simple-Flo/popups/agent-of-presence/assets/Design-is-Art-Everybody-Can-Use-min_pages-to-jpg-0032.jpg"
    "/Users/florentinhortopan/Documents/Flo-website/Simple-Flo/popups/luxyuu/assets/Design-is-Art-Everybody-Can-Use-min_pages-to-jpg-0041.jpg"
    "/Users/florentinhortopan/Documents/Flo-website/Simple-Flo/popups/invasivecode/assets/d6dbtju29lkv79s4vihf1k5tcxng.png"
    "/Users/florentinhortopan/Documents/Flo-website/Simple-Flo/popups/igoatse/assets/Design-is-Art-Everybody-Can-Use-min_pages-to-jpg-0021.jpg"
    "/Users/florentinhortopan/Documents/Flo-website/Simple-Flo/popups/agent-of-presence/assets/Design-is-Art-Everybody-Can-Use-min_pages-to-jpg-0051.jpg"
    "/Users/florentinhortopan/Documents/Flo-website/Simple-Flo/popups/agent-of-presence/assets/Design-is-Art-Everybody-Can-Use-min_pages-to-jpg-0026.jpg"
    "/Users/florentinhortopan/Documents/Flo-website/Simple-Flo/popups/inoa/assets/Design-is-Art-Everybody-Can-Use-min_pages-to-jpg-0016.jpg"
)

# Function to get file size in bytes
get_file_size() {
    stat -f%z "$1" 2>/dev/null || echo "0"
}

# Function to convert bytes to human readable
bytes_to_human() {
    local bytes=$1
    if [ $bytes -ge 1048576 ]; then
        echo "$(( bytes / 1048576 ))M"
    elif [ $bytes -ge 1024 ]; then
        echo "$(( bytes / 1024 ))K"
    else
        echo "${bytes}B"
    fi
}

# Function to optimize image
optimize_image() {
    local image_path="$1"
    local target_size=512000  # 500KB in bytes
    
    if [ ! -f "$image_path" ]; then
        echo "File not found: $image_path"
        return 1
    fi
    
    local original_size=$(get_file_size "$image_path")
    local original_size_human=$(bytes_to_human $original_size)
    
    echo "Processing: $(basename "$image_path")"
    echo "  Original size: $original_size_human"
    
    # Create backup
    local backup_path="${image_path}.backup"
    cp "$image_path" "$backup_path"
    echo "  Backup created: $(basename "$backup_path")"
    
    # Get image dimensions
    local dimensions=$(sips -g pixelWidth -g pixelHeight "$image_path" | grep -E "(pixelWidth|pixelHeight)" | awk '{print $2}' | tr '\n' 'x' | sed 's/x$//')
    echo "  Original dimensions: ${dimensions}"
    
    # Try different optimization strategies
    local success=false
    
    # Strategy 1: Reduce quality to 80%
    sips -s format jpeg -s formatOptions 80 "$image_path" --out "$image_path.tmp" 2>/dev/null
    if [ $? -eq 0 ]; then
        local new_size=$(get_file_size "$image_path.tmp")
        if [ $new_size -lt $target_size ]; then
            mv "$image_path.tmp" "$image_path"
            success=true
            echo "  ✓ Optimized with 80% quality"
        else
            rm "$image_path.tmp"
        fi
    fi
    
    # Strategy 2: Reduce quality to 70% and resize to 90%
    if [ "$success" = false ]; then
        sips -s format jpeg -s formatOptions 70 -Z 90 "$image_path" --out "$image_path.tmp" 2>/dev/null
        if [ $? -eq 0 ]; then
            local new_size=$(get_file_size "$image_path.tmp")
            if [ $new_size -lt $target_size ]; then
                mv "$image_path.tmp" "$image_path"
                success=true
                echo "  ✓ Optimized with 70% quality and 90% size"
            else
                rm "$image_path.tmp"
            fi
        fi
    fi
    
    # Strategy 3: Reduce quality to 60% and resize to 80%
    if [ "$success" = false ]; then
        sips -s format jpeg -s formatOptions 60 -Z 80 "$image_path" --out "$image_path.tmp" 2>/dev/null
        if [ $? -eq 0 ]; then
            local new_size=$(get_file_size "$image_path.tmp")
            if [ $new_size -lt $target_size ]; then
                mv "$image_path.tmp" "$image_path"
                success=true
                echo "  ✓ Optimized with 60% quality and 80% size"
            else
                rm "$image_path.tmp"
            fi
        fi
    fi
    
    # Strategy 4: More aggressive compression
    if [ "$success" = false ]; then
        sips -s format jpeg -s formatOptions 50 -Z 70 "$image_path" --out "$image_path.tmp" 2>/dev/null
        if [ $? -eq 0 ]; then
            local new_size=$(get_file_size "$image_path.tmp")
            if [ $new_size -lt $target_size ]; then
                mv "$image_path.tmp" "$image_path"
                success=true
                echo "  ✓ Optimized with 50% quality and 70% size"
            else
                rm "$image_path.tmp"
            fi
        fi
    fi
    
    if [ "$success" = true ]; then
        local final_size=$(get_file_size "$image_path")
        local final_size_human=$(bytes_to_human $final_size)
        local reduction=$(( (original_size - final_size) * 100 / original_size ))
        echo "  Final size: $final_size_human (${reduction}% reduction)"
    else
        echo "  ✗ Could not optimize below 500KB, restoring backup"
        mv "$backup_path" "$image_path"
    fi
    
    echo ""
}

# Process each large image
for image in "${LARGE_IMAGES[@]}"; do
    optimize_image "$image"
done

echo "Image optimization complete!"
echo ""
echo "Summary of optimized images:"
for image in "${LARGE_IMAGES[@]}"; do
    if [ -f "$image" ]; then
        local size=$(get_file_size "$image")
        local size_human=$(bytes_to_human $size)
        echo "  $(basename "$image"): $size_human"
    fi
done
