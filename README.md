# Vision Quest

Build AI-powered image classifiers using machine learning in your browser!

## 🚀 Quick Start

1. Click **Use this template** → **Open in a codespace**
2. Wait for the environment to load (1-2 minutes)
3. Run `npm run dev` in the terminal
4. Open the app in your browser

## 📚 What You'll Build

Train custom image classifiers using TensorFlow.js and MobileNet:

- **Session 1:** Use pre-trained MobileNet to classify images
- **Session 2:** Collect training images programmatically
- **Session 3:** Train your first custom classifier
- **Session 4:** Build your own classifier with custom categories
- **Session 5:** Deploy your AI app to GitHub Pages

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Dev server with hot reload
- **TensorFlow.js** - Machine learning in the browser
- **MobileNet** - Pre-trained image classification model

## 📦 Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📁 Project Structure

```
vision-quest-starter/
├── src/
│   ├── components/
│   │   ├── PrebuiltClassifier.jsx   # Session 1
│   │   └── CustomTraining.jsx       # Sessions 2-4
│   └── App.jsx                      # Main app with tabs
├── public/                          # Static assets
└── index.html                       # Entry point
```

## 🆘 Troubleshooting

**Port already in use:**
```bash
npx kill-port 5173
npm run dev
```

**Model not loading:**
- Check browser console (F12) for errors
- Ensure internet connection (MobileNet loads from CDN)
- Try refreshing the page

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📖 Resources

- Session guides provided by your instructor
- Browser console (F12) for debugging
- GitHub Copilot / Amazon Q for AI assistance

---

Built with ❤️ at Wizcamp
