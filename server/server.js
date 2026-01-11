import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });

// Enable CORS for Vite dev server
app.use(cors());
app.use(express.json());

// Save uploaded image to training data folder
app.post('/api/upload-image', upload.single('image'), (req, res) => {
  try {
    const { category } = req.body;
    
    if (!category) {
      return res.status(400).json({ error: 'Category is required' });
    }
    
    const categoryPath = path.join(__dirname, '..', 'public', 'training-library', category);
    
    // Create category folder if needed
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }
    
    // Move uploaded file to category folder
    const filename = `${Date.now()}-${req.file.originalname}`;
    const destPath = path.join(categoryPath, filename);
    fs.renameSync(req.file.path, destPath);
    
    res.json({ success: true, filename });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Get list of uploaded images for a category
app.get('/api/training-images/:category', (req, res) => {
  try {
    const categoryPath = path.join(
      __dirname,
      '..',
      'public',
      'training-library',
      req.params.category
    );
    
    const files = fs.existsSync(categoryPath) ? fs.readdirSync(categoryPath) : [];
    res.json({ images: files });
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ error: 'Failed to list images' });
  }
});

// Delete an image
app.delete('/api/training-images/:category/:filename', (req, res) => {
  try {
    const imagePath = path.join(
      __dirname,
      '..',
      'public',
      'training-library',
      req.params.category,
      req.params.filename
    );
    
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Upload server running on http://localhost:${PORT}`);
});
