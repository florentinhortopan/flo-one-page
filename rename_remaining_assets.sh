#!/bin/bash

# Script to rename remaining asset files and directories with spaces

echo "Renaming remaining files and directories with spaces..."

# First, rename the directory with spaces
echo "Renaming directory: 'Airbnb - DLS' -> 'Airbnb-DLS'"
if [ -d "popups/airbnb/assets/Airbnb - DLS" ]; then
    mv "popups/airbnb/assets/Airbnb - DLS" "popups/airbnb/assets/Airbnb-DLS"
    echo "Directory renamed successfully"
    
    # Update HTML references to the directory
    echo "Updating HTML references for directory rename..."
    find popups -name "*.html" -exec sed -i '' 's|Airbnb - DLS|Airbnb-DLS|g' {} \;
    echo "HTML references updated"
else
    echo "Directory not found or already renamed"
fi

# Now rename the subdirectory with spaces
echo "Renaming subdirectory: 'TV without remote control' -> 'TV-without-remote-control'"
if [ -d "popups/nagra-opentv/assets/TV-without-remote-preso-imgs/TV without remote control" ]; then
    mv "popups/nagra-opentv/assets/TV-without-remote-preso-imgs/TV without remote control" "popups/nagra-opentv/assets/TV-without-remote-preso-imgs/TV-without-remote-control"
    echo "Subdirectory renamed successfully"
    
    # Update HTML references to the subdirectory
    echo "Updating HTML references for subdirectory rename..."
    find popups -name "*.html" -exec sed -i '' 's|TV without remote control|TV-without-remote-control|g' {} \;
    echo "HTML references updated"
else
    echo "Subdirectory not found or already renamed"
fi

echo "Remaining asset renaming completed!"
