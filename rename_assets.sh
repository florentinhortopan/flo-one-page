#!/bin/bash

# Script to rename asset files to remove spaces and special characters
# and update all HTML references

echo "Starting asset file renaming process..."

# Function to sanitize filename
sanitize_filename() {
    local filename="$1"
    # Replace spaces with hyphens
    filename=$(echo "$filename" | sed 's/ /-/g')
    # Replace multiple hyphens with single hyphen
    filename=$(echo "$filename" | sed 's/--*/-/g')
    # Remove leading/trailing hyphens
    filename=$(echo "$filename" | sed 's/^-\|-$//g')
    echo "$filename"
}

# Create a mapping file to track old -> new names
MAPPING_FILE="file_mapping.txt"
> "$MAPPING_FILE"

echo "Creating file mapping..."

# Find all files with spaces and create mapping
find popups -name "*" -type f | grep -E "\.(mp4|mov|m4v|mp3|jpg|jpeg|png|gif|webp|pdf)$" | grep " " | while read -r old_path; do
    # Get directory and filename
    dir=$(dirname "$old_path")
    old_filename=$(basename "$old_path")
    
    # Sanitize filename
    new_filename=$(sanitize_filename "$old_filename")
    
    # Create new path
    new_path="$dir/$new_filename"
    
    # Only rename if the new name is different
    if [ "$old_path" != "$new_path" ]; then
        echo "OLD:$old_path|NEW:$new_path" >> "$MAPPING_FILE"
    fi
done

echo "File mapping created. Starting renames..."

# Read mapping and perform renames
while IFS='|' read -r old_line new_line; do
    old_path=$(echo "$old_line" | sed 's/OLD://')
    new_path=$(echo "$new_line" | sed 's/NEW://')
    
    if [ -f "$old_path" ]; then
        echo "Renaming: $old_path -> $new_path"
        mv "$old_path" "$new_path"
    fi
done < "$MAPPING_FILE"

echo "File renames completed. Updating HTML references..."

# Update HTML files with new file paths
while IFS='|' read -r old_line new_line; do
    old_path=$(echo "$old_line" | sed 's/OLD://')
    new_path=$(echo "$new_line" | sed 's/NEW://')
    
    # Convert to relative path from popups directory
    old_relative=$(echo "$old_path" | sed 's|^popups/||')
    new_relative=$(echo "$new_path" | sed 's|^popups/||')
    
    echo "Updating references: $old_relative -> $new_relative"
    
    # Find and replace in all HTML files
    find popups -name "*.html" -exec sed -i '' "s|$old_relative|$new_relative|g" {} \;
done < "$MAPPING_FILE"

echo "HTML references updated. Cleaning up..."

# Remove mapping file
rm "$MAPPING_FILE"

echo "Asset renaming process completed!"
echo ""
echo "Summary:"
echo "- Renamed files to remove spaces and special characters"
echo "- Updated all HTML references to use new file names"
echo "- Files are now URL-safe and Vercel-compatible"
