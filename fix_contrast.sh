#!/bin/bash

# Script to fix contrast issues in all popup HTML files
# Changes low contrast colors to high contrast alternatives

ROOT_DIR="/Users/florentinhortopan/Documents/Flo-website/Simple-Flo"

echo "Fixing contrast issues in all popup files..."

# Find all HTML files in popups directory
find "$ROOT_DIR/popups" -name "*.html" -type f | while read -r html_file; do
    echo "Processing: $(basename "$html_file")"
    
    # Make a backup
    cp "$html_file" "${html_file}.backup"
    
    # Replace low contrast colors with high contrast alternatives
    # #555 -> #333 (much darker)
    # #484848 -> #222 (much darker)  
    # #666 -> #333 (much darker)
    # #777 -> #333 (much darker)
    # #888 -> #333 (much darker)
    # #999 -> #444 (darker)
    
    sed -i '' \
        -e 's/color: #555/color: #333/g' \
        -e 's/color: #484848/color: #222/g' \
        -e 's/color: #666/color: #333/g' \
        -e 's/color: #777/color: #333/g' \
        -e 's/color: #888/color: #333/g' \
        -e 's/color: #999/color: #444/g' \
        -e 's/color:#555/color: #333/g' \
        -e 's/color:#484848/color: #222/g' \
        -e 's/color:#666/color: #333/g' \
        -e 's/color:#777/color: #333/g' \
        -e 's/color:#888/color: #333/g' \
        -e 's/color:#999/color: #444/g' \
        "$html_file"
    
    echo "  ✓ Updated contrast colors"
done

echo ""
echo "Contrast fixes completed!"
echo "All files have been backed up with .backup extension"
echo ""
echo "Changes made:"
echo "  #555 -> #333 (much darker)"
echo "  #484848 -> #222 (much darker)"
echo "  #666 -> #333 (much darker)"
echo "  #777 -> #333 (much darker)"
echo "  #888 -> #333 (much darker)"
echo "  #999 -> #444 (darker)"

