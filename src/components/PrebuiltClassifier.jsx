import { useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import ConfidenceVisualizer from './ConfidenceVisualizer';

function PrebuiltClassifier() {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  // Helper: Load image from URL (PROVIDED)
  async function loadImageFromUrl(url) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });
    
    return img;
  }

  // SESSION-01: Students add model loading logic
  async function loadModel() {
    setLoading(true);
    console.log('Loading model...');
    
    try {
      console.log('Model loaded successfully!');
    } catch (error) {
      console.error('Error loading model:', error);
      alert('Failed to load model. Check console for details.');
    }
    
    setLoading(false);
  }

  // SESSION-01: Students add classification logic
  async function classifyImage(img) {
    if (!model) {
      alert('Please load the model first!');
      return;
    }

    setLoading(true);
    console.log('Classifying image...');

    try {
      console.log('Classification complete');
    } catch (error) {
      console.error('Error classifying image:', error);
      alert('Failed to classify image. Check console for details.');
    }

    setLoading(false);
  }

  // Handle image upload
  async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    
    const img = new Image();
    img.onload = () => {
      classifyImage(img);
    };
    img.src = imageUrl;
  }

  // Handle image from URL
  async function handleImageUrl() {
    if (!imageUrl.trim()) {
      alert('Please enter an image URL');
      return;
    }

    try {
      const img = await loadImageFromUrl(imageUrl);
      setImagePreview(imageUrl);
      classifyImage(img);
    } catch (error) {
      alert('Failed to load image. Check the URL and try again.');
    }
  }

  return (
    <div>
      <div className="card">
        <h2>Pre-built Image Classifier</h2>
        <p>
          This classifier uses MobileNet, a pre-trained model that recognizes 1000+ objects
          including cats and dogs. Let's see how well it works!
        </p>

        <button 
          className="btn primary mb-3" 
          onClick={loadModel} 
          disabled={loading || model}
        >
          {loading ? 'Loading...' : model ? '✅ Model Loaded' : 'Load Model'}
        </button>

        {model && (
          <div className="mb-3">
            <h3>Test Single Image</h3>
            
            <div className="mb-2">
              <p className="text-muted mb-1">Option 1: Use Image URL</p>
              <div className="flex flex-gap">
                <input
                  type="text"
                  className="input flex-1"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  disabled={loading}
                />
                <button className="btn primary" onClick={handleImageUrl} disabled={loading}>
                  Classify
                </button>
              </div>
              <p className="text-small text-muted mt-05">
                Try: https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800
              </p>
            </div>

            <div>
              <p className="text-muted mb-1">Option 2: Upload from Computer</p>
              <label className="file-upload-label">
                Choose Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={loading}
                />
              </label>
            </div>
          </div>
        )}

        {imagePreview && (
          <div className="mb-3">
            <h3>Image:</h3>
            <img
              src={imagePreview}
              alt="Preview"
              className="image-preview"
            />
          </div>
        )}

        <ConfidenceVisualizer prediction={prediction} />
      </div>
    </div>
  );
}

export default PrebuiltClassifier;
