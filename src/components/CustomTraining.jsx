import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import ConfidenceVisualizer from './ConfidenceVisualizer';

function CustomTraining() {
  const [categories] = useState(['cat', 'dog']);
  const [catImages, setCatImages] = useState([]);
  const [dogImages, setDogImages] = useState([]);
  const [model, setModel] = useState(null);
  const [training, setTraining] = useState(false);
  const [progress, setProgress] = useState({ epoch: 0, loss: 0, accuracy: 0 });
  const [prediction, setPrediction] = useState(null);
  const [testImageUrl, setTestImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  // Helper: Load an image from URL (PROVIDED)
  async function loadImage(imagePath) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.src = imagePath;
    });
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

  // SESSION-05: Students add image upload logic
  async function uploadImages(files, category) {
    setUploading(true);
    console.log(`Uploading ${files.length} images to ${category}...`);

    try {
      console.log('✅ Upload complete!');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload images. Check console for details.');
    }

    setUploading(false);
  }

  // SESSION-03: Students add image loading logic
  async function loadTrainingImages() {
    console.log('Loading training images...');
  }

  // SESSION-04: Students add tensor creation logic
  async function createTrainingData() {
    console.log('Creating training data...');
    
    const imageFeatures = [];
    const imageLabels = [];
    
    const mobilenetModel = await mobilenet.load();
    
    return { features: null, labels: null };
  }

  // SESSION-04: Students add training logic
  async function trainModel() {
    if (catImages.length === 0 || dogImages.length === 0) {
      alert('Load training images first!');
      return;
    }

    setTraining(true);
    
    try {
      const trainingData = await createTrainingData();
      const trainedModel = createModel();
      
      setModel(trainedModel);
      console.log('✅ Training complete!');
    } catch (error) {
      console.error('Training error:', error);
      alert('Training failed. Check console for details.');
    }
    
    setTraining(false);
  }

  // SESSION-04: Students add classification logic
  async function classifyImage() {
    if (!model) {
      alert('Train the model first!');
      return;
    }

    if (!testImageUrl.trim()) {
      alert('Enter an image URL first!');
      return;
    }

    console.log('Classifying image...');
  }

  // SESSION-05: Students add batch testing logic
  async function batchTestCustomModel(imageUrls, category) {
    if (!model) {
      alert('Train the model first!');
      return;
    }

    console.log(`\n=== Testing ${imageUrls.length} ${category} images ===`);

    try {
      console.log('Batch test complete!');
    } catch (error) {
      console.error('Batch test failed:', error);
    }
  }

  const allImages = { cat: catImages, dog: dogImages };

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
          disabled={catImages.length > 0}
        >
          {catImages.length > 0 ? '✅ Images Loaded' : 'Load Training Images'}
        </button>

        <div className="mb-3">
          <h4>Upload Custom Images (Optional)</h4>
          <p className="text-muted text-small mb-2">
            Upload your own images to train on custom categories
          </p>
          
          {categories.map((category) => (
            <div key={category} className="mb-2">
              <label className="file-upload-label">
                Upload {category} images
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => uploadImages(Array.from(e.target.files), category)}
                  disabled={uploading}
                />
              </label>
            </div>
          ))}
        </div>

        {categories.map((category, index) => {
          const images = allImages[category];
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
        
        <button 
          className="btn primary mb-3" 
          onClick={trainModel}
          disabled={training || catImages.length === 0}
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
      </div>

      {model && (
        <div className="card">
          <h3>Test Your Model</h3>
          
          <div className="mb-3">
            <h4>Single Image Test</h4>
            <div className="flex flex-gap mb-2">
              <input
                type="text"
                className="input flex-1"
                placeholder="https://example.com/image.jpg"
                value={testImageUrl}
                onChange={(e) => setTestImageUrl(e.target.value)}
              />
              <button className="btn primary" onClick={classifyImage}>
                Test
              </button>
            </div>
            
            <p className="text-small text-muted">
              Try: https://cdn.wizcamp.io/images/team/dooder.jpg
            </p>
          </div>

          <div className="mb-3">
            <h4>Batch Testing</h4>
            <p className="text-muted text-small mb-2">
              Test your custom model on multiple images
            </p>
            <div className="flex flex-gap">
              <button 
                className="btn secondary" 
                onClick={() => {
                  const urls = Array.from({length: 30}, (_, i) => 
                    `/training-library/cat/cat-${String(i + 1).padStart(2, '0')}.jpg`
                  );
                  batchTestCustomModel(urls, 'cat');
                }}
              >
                Test 30 Cats
              </button>
              <button 
                className="btn secondary" 
                onClick={() => {
                  const urls = Array.from({length: 30}, (_, i) => 
                    `/training-library/dog/dog-${String(i + 1).padStart(2, '0')}.jpg`
                  );
                  batchTestCustomModel(urls, 'dog');
                }}
              >
                Test 30 Dogs
              </button>
            </div>
          </div>

          <ConfidenceVisualizer prediction={prediction} />
        </div>
      )}
    </div>
  );
}

export default CustomTraining;
