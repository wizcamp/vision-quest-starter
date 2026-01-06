# Deployment Guide

## Prerequisites

- GitHub account
- Completed training and saved your model
- Tested your classifier locally

## Step-by-Step Deployment to GitHub Pages

### 1. Prepare Your Project

```bash
# Make sure everything works locally
npm run dev

# Test both tabs (Pre-built and Custom Training)
# Upload some images and verify they work

# Build for production
npm run build
```

This creates a `dist/` folder with your production-ready app.

### 2. Update vite.config.js

**IMPORTANT:** Change the `base` to match your repository name.

Open `vite.config.js` and update:

```javascript
export default defineConfig({
  base: '/YOUR-REPO-NAME/', // Change this!
  // ...
});
```

For example, if your repo is `my-vision-quest`:
```javascript
base: '/my-vision-quest/',
```

Then rebuild:
```bash
npm run build
```

### 3. Initialize Git (if not already done)

```bash
# Check if git is initialized
git status

# If not initialized, run:
git init
git add .
git commit -m "Initial commit - Vision Quest classifier"
```

### 4. Create GitHub Repository

#### Option A: Via GitHub Website
1. Go to https://github.com/new
2. Repository name: `vision-quest` (or your chosen name)
3. Description: "My custom ML image classifier"
4. **Public** repository (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license
6. Click "Create repository"

#### Option B: Via GitHub CLI (if installed)
```bash
gh repo create vision-quest --public --source=. --remote=origin
```

### 5. Connect and Push to GitHub

GitHub will show you commands. Use the "push an existing repository" section:

```bash
# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://YOUR-USERNAME:YOUR-TOKEN@github.com/YOUR-USERNAME/vision-quest.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR-TOKEN` with your GitHub Personal Access Token.

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab (top right)
3. Click **Pages** in left sidebar (under "Code and automation")
4. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/dist` (IMPORTANT!)
   - Click **Save**

### 7. Wait for Deployment

- GitHub will build and deploy your site
- Takes 1-2 minutes
- Check the Actions tab to see progress
- You'll see a green checkmark when ready

### 8. Visit Your Live Site

Your classifier is now live at:
```
https://YOUR-USERNAME.github.io/vision-quest/
```

(Replace `YOUR-USERNAME` and `vision-quest` with your actual values)

## Updating Your Deployed Site

Made changes? Deploy updates:

```bash
# Make your changes to the code
# ...

# Rebuild
npm run build

# Commit and push
git add .
git commit -m "Update classifier with new features"
git push

# GitHub Pages auto-deploys in 1-2 minutes
```

## Troubleshooting

### Blank page after deployment

**Problem:** Page loads but shows blank screen

**Solution:**
1. Check `vite.config.js` - `base` must match your repo name exactly
2. Rebuild: `npm run build`
3. Commit and push again
4. Check browser console (F12) for errors

### 404 errors for assets

**Problem:** Images or JavaScript files not loading

**Solution:**
1. Verify GitHub Pages is set to deploy from `/dist` folder (not `/root`)
2. Check that `dist/` folder exists after running `npm run build`
3. Ensure `vite.config.js` has correct `base` path

### Model not loading on deployed site

**Problem:** Classifier works locally but not on GitHub Pages

**Solution:**
1. Check browser console for CORS errors
2. Verify model files are in `dist/models/` after build
3. Ensure model files aren't too large (GitHub has 100MB file limit)
4. Check that TensorFlow.js can load from CDN (requires internet)

### Changes not appearing

**Problem:** Pushed changes but site looks the same

**Solution:**
1. Wait 2-3 minutes for GitHub Pages to rebuild
2. Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. Check Actions tab on GitHub to see if deployment succeeded
4. Clear browser cache

### Token authentication issues

**Problem:** Can't push to GitHub

**Solution:**
1. Verify your Personal Access Token is valid
2. Token needs `repo` scope permissions
3. Use format: `https://USERNAME:TOKEN@github.com/USERNAME/REPO.git`
4. Or use SSH instead: `git@github.com:USERNAME/REPO.git`

## Alternative: Deploy to Netlify

If GitHub Pages doesn't work, try Netlify:

1. Build your project: `npm run build`
2. Go to https://app.netlify.com
3. Drag and drop your `dist/` folder
4. Your site is live instantly!

## Sharing Your Project

Once deployed, share your classifier:

### Add to GitHub Profile
1. Go to your GitHub profile
2. Click "Edit profile"
3. Add your project URL to "Website"

### Share on Social Media
```
🎯 I built an AI image classifier that recognizes [YOUR CATEGORIES]!

Try it: https://YOUR-USERNAME.github.io/vision-quest/

Built with React + TensorFlow.js at @Wizcamp
```

### Add to Portfolio
Include in your portfolio with:
- Live demo link
- GitHub repo link
- Description of what you learned
- Screenshots of your classifier in action

### College Applications
Mention in applications:
- "Built and deployed a machine learning image classifier"
- "Trained custom neural network using transfer learning"
- "Deployed production ML application to GitHub Pages"

## Next Steps

After deployment:

1. **Test thoroughly** - Try different images, check all features
2. **Get feedback** - Share with friends and family
3. **Iterate** - Add improvements based on feedback
4. **Document** - Update README with screenshots and demo
5. **Showcase** - Add to your portfolio and resume

Congratulations! 🎉 You've deployed your ML project to the web!

---

Need help? Ask your instructor or check the main README.md for troubleshooting tips.
