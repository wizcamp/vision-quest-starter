import { useState } from 'react';
// TODO: Uncomment this import to use MobileNet
// import * as mobilenet from '@tensorflow-models/mobilenet';

function PrebuiltClassifier() {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // TODO: Complete this function to load the MobileNet model
  async function loadModel() {
    setLoading(true);
    console.log('Loading model...');
    
    try {
      // TODO: Uncomment these lines to load MobileNet
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
        <div style={{ marginBottom: '1.5rem' }}>
          <h3>Step 1: Load the Model</h3>
          <button className="primary" onClick={loadModel} disabled={loading || model}>
            {loading ? 'Loading...' : model ? '✅ Model Loaded' : 'Load Model'}
          </button>
        </div>

        {/* Step 2: Upload Image */}
        {model && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h3>Step 2: Upload an Image</h3>
            {/* TODO: Connect this input to handleImageUpload */}
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
        )}

        {/* Image Preview */}
        {imagePreview && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h3>Uploaded Image:</h3>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: '300px', borderRadius: '0.5rem' }}
            />
          </div>
        )}

        {/* Prediction Result */}
        {prediction && (
          <div className="alert success">
            <h3>Prediction:</h3>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#065f46' }}>
              {prediction.className}
            </p>
            <p>Confidence: {(prediction.probability * 100).toFixed(1)}%</p>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="card">
        <h3>📚 Instructions</h3>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>
            Open <code>src/training/PrebuiltClassifier.jsx</code>
          </li>
          <li>Find the TODOs in the code</li>
          <li>Uncomment the import statement at the top</li>
          <li>Uncomment the model loading code in loadModel()</li>
          <li>Uncomment the classification code in classifyImage()</li>
          <li>Save the file and test it!</li>
        </ol>
      </div>
    </div>
  );
}

export default PrebuiltClassifier;
