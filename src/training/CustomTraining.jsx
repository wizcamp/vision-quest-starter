import { useState } from 'react';

function CustomTraining() {
  const [categories, setCategories] = useState(['cat', 'dog']);
  const [images, setImages] = useState({ cat: [], dog: [] });
  const [uploading, setUploading] = useState(false);

  // TODO: Complete this function to upload images to the server
  async function uploadImage(file, category) {
    setUploading(true);

    try {
      // Create FormData to send file
      const formData = new FormData();
      
      // TODO: Add the file to formData
      // HINT: formData.append('image', file);
      
      // TODO: Add the category to formData
      // HINT: formData.append('category', category);

      // Send to server
      const response = await fetch('http://localhost:3001/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Image uploaded:', data.filename);

        // TODO: Update the images state to include the new image
        // HINT: Use setImages() with the spread operator
        // setImages(prev => ({
        //   ...prev,
        //   [category]: [...prev[category], data.filename]
        // }));
        
        alert('Image uploaded successfully!');
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image. Make sure the server is running!');
    }

    setUploading(false);
  }

  // Handle file selection
  function handleFileSelect(event, category) {
    const files = Array.from(event.target.files);
    
    // Upload each file
    files.forEach(file => {
      uploadImage(file, category);
    });
  }

  // TODO: Add function to update category names
  function updateCategoryName(oldName, newName) {
    // YOUR CODE HERE
    // HINT: Update both categories array and images object
  }

  return (
    <div>
      <div className="card">
        <h2>Custom Training</h2>
        <p>
          Train your own cat vs dog classifier using the images in the training library. Can you
          match MobileNet's accuracy?
        </p>

        <div className="alert info">
          <strong>📝 Your Task:</strong> Complete the TODOs to load training images and train your
          model.
        </div>
      </div>

      {/* Category Management */}
      <div className="card">
        <h3>Training Categories: Cat vs Dog</h3>
        <p className="mb-2">
          Use the 30 cat and 30 dog images from the training library to train your classifier.
        </p>

        {categories.map((category, index) => (
          <div key={index} className="section">
            {/* Category Header */}
            <div className="flex align-center gap-1 mb-2">
              <h3 className="m-0">{category}</h3>
              <span className={`badge ${images[category]?.length === 30 ? 'success' : 'neutral'}`}>
                {images[category]?.length || 0} / 30 images
              </span>
            </div>

            {/* Upload Button */}
            <label className="file-upload-label">
              📤 Upload Images
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={e => handleFileSelect(e, category)}
                disabled={uploading}
              />
            </label>

            {/* TODO: Display uploaded images as thumbnails */}
            {/* HINT: Map over images[category] and show each image */}
            {images[category]?.length > 0 && (
              <div className="mt-2">
                <p className="text-small text-muted">
                  TODO: Display image thumbnails here
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="card">
        <h3>📚 Instructions</h3>
        <ol className="list-padded">
          <li>
            Open <code>src/training/CustomTraining.jsx</code>
          </li>
          <li>Complete the TODO to load images from training-library/cat and training-library/dog</li>
          <li>Add code to display the loaded images</li>
          <li>Complete the training function (Session 4)</li>
          <li>Compare your model's accuracy to MobileNet</li>
        </ol>

        <div className="alert info mt-2">
          <strong>💡 Goal:</strong> Train a model that can classify cats vs dogs as accurately as
          MobileNet. You have 30 images per category - is that enough?
        </div>
      </div>

      {/* Extension */}
      <div className="card">
        <h3>🚀 Extension (Session 5-6)</h3>
        <p>After mastering cat vs dog, choose your own categories:</p>
        <ul className="list-padded">
          <li><strong>Objects:</strong> car vs truck, phone vs tablet, book vs laptop</li>
          <li><strong>Sports:</strong> basketball vs soccer ball, tennis vs baseball</li>
          <li><strong>Nature:</strong> tree vs flower, mountain vs beach, sun vs moon</li>
        </ul>
        <p className="mt-2">
          Collect 20-30 images per category and train a classifier for YOUR categories!
        </p>
      </div>

      {/* Resources for Extension */}
      <div className="card">
        <h3>🖼️ Free Image Resources (For Your Custom Categories)</h3>
        <p>When you're ready to train on your own categories, use these sources:</p>
        <ul className="list-padded">
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>{' '}
            - High-quality photos
          </li>
          <li>
            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">
              Pexels
            </a>{' '}
            - Free stock photos
          </li>
          <li>
            <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
              Pixabay
            </a>{' '}
            - Free images and videos
          </li>
          <li>
            <a
              href="https://www.kaggle.com/datasets"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle Datasets
            </a>{' '}
            - Pre-organized datasets
          </li>
          <li>
            <a href="https://commons.wikimedia.org" target="_blank" rel="noopener noreferrer">
              Wikimedia Commons
            </a>{' '}
            - Public domain images
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CustomTraining;
