import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import ConfidenceVisualizer from './ConfidenceVisualizer';

function CustomTraining() {
  const [categories, setCategories] = useState(['cat', 'dog']);
  const [images, setImages] = useState({ cat: [], dog: [] });
  const [model, setModel] = useState(null);
  const [training, setTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState({ epoch: 0, loss: 0, accuracy: 0 });
  const [prediction, setPrediction] = useState(null);

  // TODO SESSION-03: Complete this function to load training images
  async function loadTrainingImages() {
    // YOUR CODE HERE
    console.log('TODO: Load training images');
  }

  // Helper function to load an image (PROVIDED)
  async function loadImage(imagePath) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.src = imagePath;
    });
  }

  // TODO SESSION-04: Complete this function to convert images to tensors
  async function createTrainingData() {
    console.log('Creating training data...');
    
    const xs = []; // Features (images)
    const ys = []; // Labels (0=cat, 1=dog)
    
    // Load MobileNet for feature extraction
    const mobilenetModel = await mobilenet.load();
    
    // TODO: Process cat images (label = 0)
    // YOUR CODE HERE
    
    // TODO: Process dog images (label = 1)
    // YOUR CODE HERE
    
    // Convert to tensors
    const xsTensor = tf.stack(xs);
    const ysTensor = tf.oneHot(tf.tensor1d(ys, 'int32'), 2);
    
    // Clean up
    xs.forEach(x => x.dispose());
    
    console.log('✅ Training data created');
    return { xs: xsTensor, ys: ysTensor };
  }

  // Model architecture (PROVIDED - from SESSION-03)
  function createModel() {
    const model = tf.sequential();
    
    // Dense layer with 128 neurons
    model.add(tf.layers.dense({
      inputShape: [1024], // MobileNet feature size
      units: 128,
      activation: 'relu'
    }));
    
    // Dropout for regularization
    model.add(tf.layers.dropout({ rate: 0.5 }));
    
    // Output layer (2 classes: cat, dog)
    model.add(tf.layers.dense({
      units: 2,
      activation: 'softmax'
    }));
    
    // Compile model
    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    
    console.log('✅ Model architecture created');
    return model;
  }

  // TODO SESSION-04: Complete this function to train the model
  async function trainModel() {
    setTraining(true);
    
    try {
      // Create training data
      const { xs, ys } = await createTrainingData();
      
      // Create model
      const trainedModel = createModel();
      
      // TODO: Add training code here
      // YOUR CODE HERE
      
      setModel(trainedModel);
      console.log('✅ Training complete!');
      
      // Clean up
      xs.dispose();
      ys.dispose();
      
    } catch (error) {
      console.error('Training error:', error);
      alert('Training failed. Check console for details.');
    }
    
    setTraining(false);
  }

  // TODO SESSION-04: Complete this function to classify images
  async function classifyWithCustomModel(imageUrl) {
    if (!model) {
      alert('Train the model first!');
      return;
    }

    // TODO: Add classification code here
    // YOUR CODE HERE
  }

  return (
    <div>
      <div className="card">
        <h2>Custom Training</h2>
        <p>
          Train your own cat vs dog classifier using transfer learning. Can you match MobileNet's
          95% accuracy with only 60 images?
        </p>
      </div>

      {/* Training Categories */}
      <div className="card">
        <h3>Training Categories</h3>

        {/* TODO SESSION-03: Add Load Training Images button here */}

        {categories.map((category, index) => (
          <div key={index} className="section">
            <div className="flex align-center gap-1 mb-2">
              <h3 className="m-0">{category}</h3>
              <span className={`badge ${images[category]?.length === 30 ? 'success' : 'neutral'}`}>
                {images[category]?.length || 0} / 30 images
              </span>
            </div>

            {/* TODO SESSION-03: Display image thumbnails here */}
          </div>
        ))}
      </div>

      {/* Training Section */}
      <div className="card">
        <h3>Model Training</h3>

        {/* TODO SESSION-04: Add Train Model button here */}

        {/* TODO SESSION-04: Add training progress display here */}
      </div>

      {/* Testing Section */}
      {/* TODO SESSION-04: Add test UI here */}

      {/* TODO SESSION-04: Add ConfidenceVisualizer here */}
    </div>
  );
}

export default CustomTraining;
