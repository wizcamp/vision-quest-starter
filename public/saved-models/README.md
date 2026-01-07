# Saved Models Directory

This directory stores your trained custom models for deployment.

## How It Works

1. **Train your model** in the Codespace using custom images
2. **Save the model** - downloads `model.json` and weight files
3. **Upload files here** - drag downloaded files into this folder
4. **Load saved model** - app loads your trained model instead of retraining
5. **Deploy** - your custom classifier goes live!

## File Structure

```
saved-models/
└── custom/
    ├── model.json          (model architecture + metadata)
    ├── weights.bin         (trained weights)
    └── categories.json     (your category names)
```

## Why This Matters

Training happens in the Codespace with your uploaded images. But uploaded images don't deploy to GitHub Pages. By saving the trained model and committing it to git, your deployed site can load the pre-trained model and classify images without needing the training data.

This is how real ML deployment works - train once, deploy the model, serve predictions!
