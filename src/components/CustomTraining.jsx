import { useState, useMemo } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import ConfidenceVisualizer from './ConfidenceVisualizer';

function CustomTraining() {
  const [categories, setCategories] = useState(['cat', 'dog']);
  const [trainingImages, setTrainingImages] = useState({});
  const [model, setModel] = useState(null);
  const [training, setTraining] = useState(false);
  const [progress, setProgress] = useState({ epoch: 0, loss: 0, accuracy: 0 });
  const [prediction, setPrediction] = useState(null);
  const [testImageUrl, setTestImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [useSavedModel, setUseSavedModel] = useState(false);

  // Helper: Load an image from URL (PROVIDED)
  async function loadImage(imagePath) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imagePath;
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });
    
    return img;
  }

  // Helper: Create model architecture (PROVIDED)
  function createModel() {
    const model = tf.sequential();
    
    model.add(tf.layers.dense({
      inputShape: [1024],
      units: 128,
      activation: 'relu'
    }));
    
    model.add(tf.layers.dropout({ rate: 0.5 }));
    
    model.add(tf.layers.dense({
      units: 2,
      activation: 'softmax'
    }));
    
    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    
    return model;
  }

  // Training configuration (PROVIDED)
  const trainingConfig = useMemo(() => ({
    epochs: 20,
    batchSize: 8,
    validationSplit: 0.2,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        setProgress({
          epoch: epoch + 1,
          loss: logs.loss.toFixed(4),
          accuracy: (logs.acc * 100).toFixed(1)
        });
      }
    }
  }), []);

  // SESSION-02: Students add image path generation logic
  function generateImagePaths(category, count) {
    const paths = [];
    return paths;
  }

  // SESSION-02: Students add loading logic
  function loadTrainingImages() {
    console.log('Loading training images...');
  }

  // SESSION-03: Students add tensor creation logic
  async function createTrainingData() {
    console.log('Creating training data...');
    
    const features = [];
    const labels = [];
    
    const net = await mobilenet.load();
    
    return { features: null, labels: null };
  }

  // SESSION-03: Students add training logic
  async function trainModel() {
    const hasAllImages = categories.every(
      cat => trainingImages[cat]?.length > 0
    );
    if (!hasAllImages) {
      alert('Load training images first!');
      return;
    }

    setTraining(true);
    
    try {
      const data = await createTrainingData();
      const model = createModel();
      
      setModel(model);
      console.log('Training complete!');
    } catch (error) {
      console.error('Training error:', error);
      alert('Training failed. Check console for details.');
    }
    
    setTraining(false);
  }

  // Classification logic (PROVIDED)
  async function classifyImage(imageSource) {
    if (!model) {
      alert('Train the model first!');
      return;
    }

    console.log('Classifying image...');
    
    try {
      const img = typeof imageSource === 'string' 
        ? await loadImage(imageSource)
        : imageSource;
      
      const net = await mobilenet.load();
      const features = net.infer(img, true).squeeze();
      
      const prediction = model.predict(features.expandDims(0));
      const probabilities = await prediction.data();
      
      const result = {
        className: probabilities[0] > probabilities[1] ? categories[0] : categories[1],
        probability: Math.max(probabilities[0], probabilities[1])
      };
      
      setPrediction(result);
      console.log('Prediction:', result);
      
      features.dispose();
      prediction.dispose();
    } catch (error) {
      console.error('Classification error:', error);
      alert('Failed to classify image. Check console for details.');
    }
  }

  // Handle image from URL (PROVIDED)
  async function handleImageUrl() {
    if (!testImageUrl.trim()) {
      alert('Enter an image URL first!');
      return;
    }

    setPrediction(null);
    setImagePreview(testImageUrl);
    await classifyImage(testImageUrl);
  }

  // Handle image upload (PROVIDED)
  async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    setPrediction(null);
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    
    const img = new Image();
    img.onload = () => {
      classifyImage(img);
    };
    img.src = imageUrl;
  }

  // Save model to downloads (PROVIDED)
  async function saveModel() {
    if (!model) {
      alert('Train a model first!');
      return;
    }

    try {
      await model.save('downloads://custom-model');
      
      const data = JSON.stringify({ categories }, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'categories.json';
      a.click();
      URL.revokeObjectURL(url);
      
      console.log('Model saved to downloads!');
      alert('Model saved! Check your Downloads folder for model files and categories.json');
    } catch (error) {
      console.error('Save failed:', error);
      alert('Failed to save model. Check console for details.');
    }
  }

  // SESSION-05: Students add model load logic
  async function loadSavedModel() {
    try {
      const model = await tf.loadLayersModel('/saved-models/custom/model.json');
      setModel(model);
      
      const response = await fetch('/saved-models/custom/categories.json');
      const data = await response.json();
      setCategories(data.categories);
      
      console.log('Saved model loaded!');
      alert('Saved model loaded successfully!');
    } catch (error) {
      console.error('Load failed:', error);
      alert('Failed to load saved model. Make sure model files are in public/saved-models/custom/');
    }
  }

  const hasImages = categories.some(cat => trainingImages[cat]?.length > 0);

  return (
    <div>
      <div className="card">
        <h2>Custom Training</h2>
        <p>
          Train your own cat vs dog classifier using transfer learning. Can you match MobileNet's
          95% accuracy with only 60 images?
        </p>
      </div>

      <div className="card">
        <h3>Training Images</h3>
        
        <button 
          className="btn primary mb-3" 
          onClick={loadTrainingImages}
          disabled={hasImages}
        >
          {hasImages ? '✅ Images Loaded' : 'Load Training Images'}
        </button>

        {categories.map((category, index) => {
          const images = trainingImages[category] || [];
          return (
            <div key={index} className="section">
              <div className="flex align-center gap-1 mb-2">
                <h3 className="m-0">{category}</h3>
                <span className={`badge ${images.length === 30 ? 'success' : 'neutral'}`}>
                  {images.length} / 30 images
                </span>
              </div>

              <div className="image-grid">
                {images.map((imagePath, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imagePath}
                    alt={`${category} ${imgIndex + 1}`}
                    className="thumbnail"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="card">
        <h3>Model Training</h3>
        
        <div className="mb-3">
          <label className="flex align-center gap-1">
            <input
              type="checkbox"
              checked={useSavedModel}
              onChange={(e) => setUseSavedModel(e.target.checked)}
            />
            <span>Use saved model (skip training)</span>
          </label>
          <p className="text-small text-muted mt-05">
            Load a previously trained model from saved-models/custom/
          </p>
        </div>

        {useSavedModel ? (
          <button 
            className="btn primary mb-3" 
            onClick={loadSavedModel}
            disabled={model}
          >
            {model ? '✅ Model Loaded' : 'Load Saved Model'}
          </button>
        ) : (
          <>
            <button 
              className="btn primary mb-3" 
              onClick={trainModel}
              disabled={training || !hasImages}
            >
              {training ? 'Training...' : model ? '✅ Model Trained' : 'Train Model'}
            </button>

            {training && (
              <div className="training-progress">
                <p>Epoch: {progress.epoch} / 20</p>
                <p>Loss: {progress.loss}</p>
                <p>Accuracy: {progress.accuracy}%</p>
              </div>
            )}

            {model && (
              <button 
                className="btn secondary mb-3" 
                onClick={saveModel}
              >
                💾 Save Model for Deployment
              </button>
            )}
          </>
        )}
      </div>

      {model && (
        <div className="card">
          <h3>Test Your Model</h3>
          
          <div className="mb-3">
            <h4>Single Image Test</h4>
            
            <div className="mb-2">
              <p className="text-muted mb-1">Option 1: Use Image URL</p>
              <div className="flex flex-gap">
                <input
                  type="text"
                  className="input flex-1"
                  placeholder="https://example.com/image.jpg"
                  value={testImageUrl}
                  onChange={(e) => setTestImageUrl(e.target.value)}
                />
                <button className="btn primary" onClick={handleImageUrl}>
                  Test
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
                />
              </label>
            </div>
          </div>

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
      )}
    </div>
  );
}

export default CustomTraining;
