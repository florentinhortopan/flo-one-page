#!/bin/bash

# Build script for Vercel deployment
# This script downloads Git LFS files before deployment

echo "Starting build process..."

# Check if git-lfs is available
if ! command -v git-lfs &> /dev/null; then
    echo "Git LFS not found, installing..."
    # Install git-lfs if not available
    curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
    sudo apt-get install git-lfs
fi

# Initialize git lfs if not already done
git lfs install

# Pull LFS files
echo "Downloading Git LFS files..."
git lfs pull

echo "Build completed successfully!"
