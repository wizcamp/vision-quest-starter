import { useState } from 'react';
import ConfidenceVisualizer from '../components/ConfidenceVisualizer';
// TODO: Uncomment these imports to use MobileNet
// import * as mobilenet from '@tensorflow-models/mobilenet';
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-backend-webgl';

function PrebuiltClassifier() {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  // TODO: Complete this function to load the MobileNet model
  async function loadModel() {
    setLoading(true);
    console.log('Loading model...');
    
    try {
      // TODO: Uncomment these lines to load MobileNet
      // await tf.setBackend('webgl');
      // await tf.ready();
      // const loadedModel = await mobilenet.load();
      // setModel(loadedModel);
      // console.log('✅ Model loaded successfully!');
      
      // TEMPORARY: Remove this alert after uncommenting above
      alert('TODO: Uncomment the model loading code!');
    } catch (error) {
      console.error('Error loading model:', error);
      alert('Failed to load model. Check console for details.');
    }
    
    setLoading(false);
  }

  // TODO: Complete this function to classify an image
  async function classifyImage(imageElement) {
    if (!model) {
      alert('Please load the model first!');
      return;
    }

    setLoading(true);
    console.log('Classifying image...');

    try {
      // TODO: Uncomment these lines to get predictions
      // const predictions = await model.classify(imageElement);
      // console.log('Predictions:', predictions);
      // setPrediction(predictions[0]); // Show top prediction
      
      // TEMPORARY: Remove this alert after uncommenting above
      alert('TODO: Uncomment the classification code!');
    } catch (error) {
      console.error('Error classifying image:', error);
      alert('Failed to classify image. Check console for details.');
    }

    setLoading(false);
  }

  // Handle image upload
  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onload = e => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);

    // Create image element for classification
    const img = new Image();
    img.onload = () => {
      classifyImage(img);
    };
    img.src = URL.createObjectURL(file);
  }

  // Handle image from URL
  function handleImageUrl() {
    if (!imageUrl.trim()) {
      alert('Please enter an image URL');
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImagePreview(imageUrl);
      classifyImage(img);
    };
    img.onerror = () => {
      alert('Failed to load image from URL. Make sure the URL is correct and the image is publicly accessible.');
    };
    img.src = imageUrl;
  }

  return (
    <div>
      <div className="card">
        <h2>Pre-built Image Classifier</h2>
        <p>
          This classifier uses MobileNet, a pre-trained model that recognizes 1000+ objects
          including cats and dogs. Let's see how well it works!
        </p>

        <div className="alert info">
          <strong>📝 Your Task:</strong> Complete the TODOs in the code to make this classifier
          work. Then test it with cat and dog images!
        </div>

        {/* Step 1: Load Model */}
        <div className="section">
          <h3>Step 1: Load the Model</h3>
          <button className="btn primary" onClick={loadModel} disabled={loading || model}>
            {loading ? 'Loading...' : model ? '✅ Model Loaded' : 'Load Model'}
          </button>
        </div>

        {/* Step 2: Upload Image or Use URL */}
        {model && (
          <div className="mb-3">
            <h3>Step 2: Test with an Image</h3>
            
            {/* Option 1: Image URL */}
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
                Try: https://cdn.wizcamp.io/images/team/dooder.jpg
              </p>
            </div>

            {/* Option 2: File Upload */}
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

        {/* Image Preview */}
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

        {/* Prediction Result */}
        <ConfidenceVisualizer prediction={prediction} />
      </div>

      {/* Instructions */}
      <div className="card">
        <h3>📚 Instructions</h3>
        <ol className="list-padded">
          <li>
            Open <code>src/training/PrebuiltClassifier.jsx</code>
          </li>
          <li>Find the TODOs in the code</li>
          <li>Uncomment the imports at the top</li>
          <li>Uncomment the model loading code in loadModel()</li>
          <li>Uncomment the classification code in classifyImage()</li>
          <li>Save and test with the sample URL or upload an image!</li>
        </ol>
      </div>
    </div>
  );
}

export default PrebuiltClassifier;
