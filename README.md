# Vision Quest - ML Image Classifier

Build your own AI-powered image classifier using machine learning!

## 🚀 Quick Start

1. **Open in Codespace** (recommended) or clone locally
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the project:**
   ```bash
   npm run dev
   ```
4. **Open the app:** Click the popup link or go to the Ports tab and open port 5173

## 📚 What You'll Build

Learn machine learning by training an image classifier:
- **Sessions 1-2:** Use MobileNet to classify cats vs dogs
- **Sessions 3-4:** Train your own cat vs dog classifier
- **Sessions 5-6:** Choose YOUR categories (taco vs burger, etc.) and compete!

## 🎯 Learning Path

### Phase 1: Pre-trained Model (Sessions 1-2)
- Use MobileNet to classify cats vs dogs
- Understand confidence scores and predictions
- See how well pre-trained models work
- **Scaffolding:** 80% complete - uncomment code to make it work

### Phase 2: Train Custom Model (Sessions 3-4)
- Train your own cat vs dog classifier
- Try to match MobileNet's accuracy
- Learn about training data and epochs
- **Scaffolding:** 60% complete - complete functions and build UI

### Phase 3: Your Categories (Session 5)
- Choose your own categories (food, objects, etc.)
- Collect training images
- Train and test your custom classifier
- **Scaffolding:** 30% complete - build from scratch with hints

### Phase 4: Deploy & Share (Session 6)
- Export your trained model
- Deploy to GitHub Pages
- Share your AI project with the world!

## 🛠️ Project Structure

```
vision-quest-starter/
├── public/
│   ├── training-library/      # Cat vs dog dataset (provided)
│   │   ├── cat/               # 30 cat images
│   │   └── dog/               # 30 dog images
│   └── my-training-data/      # Your custom categories (you create)
├── src/
│   ├── training/
│   │   ├── PrebuiltClassifier.jsx   # Session 1-2
│   │   └── CustomTraining.jsx       # Session 3-4
│   ├── App.jsx                # Main app with tabs
│   └── main.jsx               # React entry point
└── package.json
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code for errors
- `npm run lint:fix` - Fix code errors automatically
- `npm run format` - Format code with Prettier

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to GitHub Pages

1. Build: `npm run build`
2. Update `vite.config.js` with your repo name
3. Push to GitHub
4. Enable GitHub Pages (deploy from `/dist` folder)
5. Your app will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## 🎓 Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **TensorFlow.js** - Machine learning library (runs in browser!)
- **MobileNet** - Pre-trained image classification model

## 📖 Session Guides

Follow along with the session guides provided by your instructor:

- **Session 1:** Pre-trained Classification (MobileNet)
- **Session 2:** Understanding Confidence & Accuracy
- **Session 3:** Training Custom Cat vs Dog Classifier
- **Session 4:** Comparing Your Model to MobileNet
- **Session 5:** Choose Your Categories & Train
- **Session 6:** Deployment & Showcase

## 🖼️ Free Image Resources

Need images for training? Use these copyright-free sources:

### General Stock Photos
- **[Unsplash](https://unsplash.com)** - High-quality photos, completely free
- **[Pexels](https://www.pexels.com)** - Free stock photos and videos
- **[Pixabay](https://pixabay.com)** - Free images, videos, and music
- **[Wikimedia Commons](https://commons.wikimedia.org)** - Public domain images

### Pre-organized Datasets
- **[Kaggle Datasets](https://www.kaggle.com/datasets)** - Thousands of ML datasets
- **[Google Dataset Search](https://datasetsearch.research.google.com)** - Find datasets across the web
- **[ImageNet](https://www.image-net.org)** - Large visual database (educational use)

### Specific Categories
- **Food:** [Food-101 Dataset](https://www.kaggle.com/datasets/dansbecker/food-101)
- **Animals:** [Animals-10 Dataset](https://www.kaggle.com/datasets/alessiocorrado99/animals10)
- **Objects:** [COCO Dataset](https://cocodataset.org)

### Tips for Finding Images
1. Search for "[category] dataset" on Kaggle
2. Use Unsplash/Pexels search with specific terms
3. Download 20-30 images per category
4. Ensure images are clear and well-lit
5. Include variety (different angles, backgrounds, lighting)

## 🆘 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Images not uploading
- Ensure images are in the correct format (JPG, PNG)
- Check browser console for errors
- Verify images are being loaded from the `public/` directory

### Model not loading
- Check browser console for TensorFlow.js errors
- Ensure you have internet connection (MobileNet loads from CDN)
- Try refreshing the page
- Clear browser cache if needed

### Build errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Getting Help

- **During Sessions:** Ask your instructor for help
- **AI Assistants:** Use GitHub Copilot or Amazon Q Developer (included in Codespace)
- **Session Guides:** Check the step-by-step instructions
- **Console:** Always check browser console (F12) for error messages

## 📝 License

MIT - Feel free to use this project for learning!

## 🏆 Challenge Ideas

Once you've completed the basic project, try these extensions:

1. **Add more categories** - Train on 4-5 categories instead of 2-3
2. **Confidence threshold** - Only show predictions above 80% confidence
3. **Multiple models** - Train different models for different tasks
4. **Real-time webcam** - Classify images from your webcam
5. **Model comparison** - Compare accuracy of different training approaches
6. **Data augmentation** - Flip, rotate, or adjust images to improve training
7. **Export predictions** - Save classification results to a file
8. **Leaderboard** - Track accuracy scores over time

---

Built with ❤️ at Wizcamp
