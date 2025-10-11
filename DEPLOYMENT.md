# Deployment Guide for flo-one-page-v2

## Quick Reference

### Directory Structure
```
/Users/florentinhortopan/Documents/Flo-website/
├── flo-one-page/        # Original production version
└── flo-one-page-v2/     # New development version (THIS ONE)
```

## Local Development

### Start Development Server
```bash
cd /Users/florentinhortopan/Documents/Flo-website/flo-one-page-v2
npm run dev
```

The dev server will typically run on `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build Locally
```bash
npm run preview
```

## Deploying to Vercel

You have two options for deployment:

### Option 1: Separate Vercel Project (Recommended)
This gives you a completely separate URL for testing.

1. **Push to a Git repository** (GitHub, GitLab, or Bitbucket):
   ```bash
   # If you want to use a new repository
   # Create a new repo on GitHub first, then:
   git remote add origin <your-new-repo-url>
   git push -u origin main
   ```

2. **Create a new Vercel project**:
   - Go to https://vercel.com/new
   - Import the new repository
   - Vercel will auto-detect the Vite settings
   - Deploy!

3. **Result**: You'll get a separate URL like `flo-one-page-v2.vercel.app`

### Option 2: Deploy as a Branch Preview
Keep using the same repository but on a different branch.

1. **Push to existing repo as a new branch**:
   ```bash
   # Connect to your existing repo
   git remote add origin <your-existing-repo-url>
   git checkout -b v2-dev
   git push -u origin v2-dev
   ```

2. **Vercel will automatically**:
   - Detect the new branch
   - Create a preview deployment
   - Give you a preview URL

## Environment Variables

If your site uses environment variables (check your original project), make sure to add them in Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add any required variables (e.g., `SUPABASE_PROJECT_ID`, API keys, etc.)

## Testing Before Production

1. Make your changes in `flo-one-page-v2`
2. Test locally with `npm run dev`
3. Push to git
4. Review the Vercel preview deployment
5. Once satisfied, either:
   - Merge changes back to production, or
   - Replace the production deployment with this version

## Git Workflow

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push

# Vercel will automatically deploy on push
```

## Reverting to Production Version

Your original production version is untouched at:
- `/Users/florentinhortopan/Documents/Flo-website/flo-one-page/`

You can always switch back or copy working features from v2 to production when ready.

## Tips

- Keep `flo-one-page` as your stable production version
- Use `flo-one-page-v2` for experiments and new features
- Once a feature is tested and working in v2, copy it to production
- Consider using git branches in v2 for different experiments

