#!/bin/bash

# Script to update external server URLs in HTML files
# Usage: ./update_external_urls.sh "https://your-server.com"

if [ $# -eq 0 ]; then
    echo "Usage: $0 <EXTERNAL_SERVER_URL>"
    echo "Example: $0 'https://your-server.com'"
    exit 1
fi

EXTERNAL_URL="$1"
ROOT_DIR="/Users/florentinhortopan/Documents/Flo-website/Simple-Flo"

echo "Updating external server URLs to: $EXTERNAL_URL"
echo ""

# Find all HTML files and replace the placeholder
find "$ROOT_DIR/popups" -name "*.html" -type f | while read -r html_file; do
    echo "Updating: $(basename "$html_file")"
    
    # Use sed to replace the placeholder URL
    sed -i '' "s|EXTERNAL_SERVER_URL|$EXTERNAL_URL|g" "$html_file"
done

echo ""
echo "External server URLs updated successfully!"
echo ""
echo "Files that were updated:"
find "$ROOT_DIR/popups" -name "*.html" -type f -exec grep -l "EXTERNAL_SERVER_URL" {} \; 2>/dev/null || echo "All URLs have been updated."
