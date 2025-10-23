# External Files Setup

## Overview
Large video files have been moved to a separate server to avoid Vercel's file size limits. The main repository now contains only smaller files that can be deployed to Vercel.

## File Structure

### Main Repository (for Vercel)
- Contains all HTML files, CSS, JavaScript, and small assets
- All files are under Vercel's size limits
- Ready for deployment

### External Files (for separate server)
- Located in: `external-files/` directory
- Contains large video files that exceed Vercel limits
- Maintains the same directory structure as the main repository

## Files Moved to External Server

### Agent of Presence
- `Agent-Of-Presence-Where-Prada-Meets-Apple.mp4` (72MB)
- `Flexible-light-fabrics.m4v` (13MB)
- `LesEmbiez_mounting-the-eonclosure.mp4` (14MB)

### Gap Inc
- `Gap-Stitch-Case.mp4` (41MB)

### GoPro
- `Demo-GoPro-ACC-search-exp-v03.mp4` (13MB)
- `Desktop-exp-mov.mov` (385MB)
- `Desktop-exp1-mov.mov` (168MB)
- `GoPro-Support-Pages-Proto.mp4` (21MB)
- `mobile-exp1-mov-hb.mp4` (15MB)

## Setup Instructions

### 1. Upload External Files
Upload the entire `external-files/` directory to your external server, maintaining the directory structure.

### 2. Update URLs
Once your external server is ready, run the update script:

```bash
./update_external_urls.sh "https://your-server.com"
```

Replace `https://your-server.com` with your actual server URL.

### 3. Deploy to Vercel
The main repository is now ready for Vercel deployment without any large files.

## HTML References
All HTML files have been updated to reference external URLs using the placeholder `EXTERNAL_SERVER_URL`. The update script will replace this with your actual server URL.

Example:
```html
<!-- Before -->
<source src="assets/video.mp4" type="video/mp4">

<!-- After update -->
<source src="https://your-server.com/popups/agent-of-presence/assets/video.mp4" type="video/mp4">
```

## Benefits
- ✅ Vercel deployment works without file size issues
- ✅ Large videos load from external server
- ✅ Same user experience
- ✅ Maintains original file structure
- ✅ Easy to update URLs when needed
