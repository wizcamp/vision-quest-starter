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

Train a custom image classifier that recognizes categories YOU choose:
- Your pets vs other animals
- Different types of food
- Sports equipment
- Anything with 2-3 clear categories!

## 🎯 Learning Path

### Phase 1: Learn with Pre-built Data (Sessions 1-2)
- Understand how ML classification works
- Use MobileNet to classify 1000+ objects
- See confidence scores and predictions in real-time
- **Scaffolding:** 80% complete - uncomment code to make it work

### Phase 2: Collect Custom Data (Sessions 3-4)
- Upload your own training images
- Organize images by category
- Learn about data quality and quantity
- **Scaffolding:** 60% complete - complete functions and build UI

### Phase 3: Train Custom Model (Session 5)
- Use transfer learning to train on your data
- Watch accuracy improve over epochs
- Test your custom classifier
- **Scaffolding:** 30% complete - build from scratch with hints

### Phase 4: Deploy & Share (Session 6)
- Export your trained model
- Deploy to GitHub Pages
- Share your AI project with the world!

## 🛠️ Project Structure

```
vision-quest-starter/
├── public/
│   ├── training-library/      # Pre-built datasets (provided)
│   │   ├── food/              # Pizza, burger, taco
│   │   └── animals/           # Dog, cat, bird
│   └── my-training-data/      # Your custom images (you create)
├── src/
│   ├── training/
│   │   ├── PrebuiltClassifier.jsx   # Session 1-2
│   │   └── CustomTraining.jsx       # Session 3-4
│   ├── App.jsx                # Main app with tabs
│   └── main.jsx               # React entry point
├── server/
│   └── server.js              # Upload server (runs automatically)
└── package.json
```

## 📦 Available Scripts

- `npm run dev` - Start development (Vite + Express servers)
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
- **Express** - Upload server for custom training (development only)

## 📖 Session Guides

Follow along with the session guides provided by your instructor:

- **Session 0:** Setup & Introduction to ML
- **Session 1:** Understanding Image Classification
- **Session 2:** Training with Pre-built Models
- **Session 3:** Collecting Custom Training Data
- **Session 4:** Organizing and Uploading Images
- **Session 5:** Training Your Custom Model
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
# Kill processes on ports 5173 and 3001
npx kill-port 5173 3001
npm run dev
```

### Images not uploading
- Check that both servers are running (you should see two URLs in terminal)
- Verify Express server is on port 3001
- Check browser console for errors
- Ensure `public/my-training-data/` folder exists

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
