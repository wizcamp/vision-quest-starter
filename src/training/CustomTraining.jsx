import { useState } from 'react';

function CustomTraining() {
  const [categories, setCategories] = useState(['Category 1', 'Category 2']);
  const [images, setImages] = useState({ 'Category 1': [], 'Category 2': [] });
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
        <p>Collect your own training images and build a custom classifier!</p>

        <div className="alert info">
          <strong>📝 Your Task:</strong> Complete the TODOs to enable image uploading and
          organization.
        </div>
      </div>

      {/* Category Management */}
      <div className="card">
        <h3>Your Categories</h3>
        <p style={{ marginBottom: '1rem' }}>
          Choose 2-3 categories you want to classify. Examples: dogs vs cats, pizza vs burger,
          etc.
        </p>

        {categories.map((category, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            {/* Category Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <h3 style={{ margin: 0 }}>{category}</h3>
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  background: '#e5e7eb',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                }}
              >
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
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
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
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>
            Open <code>src/training/CustomTraining.jsx</code>
          </li>
          <li>Complete the uploadImage() function</li>
          <li>Add code to update the images state after upload</li>
          <li>Add code to display image thumbnails</li>
          <li>Test by uploading images for each category</li>
        </ol>

        <div className="alert info" style={{ marginTop: '1rem' }}>
          <strong>💡 Tip:</strong> Collect 20-30 images per category for best results. Use varied
          angles, lighting, and backgrounds!
        </div>
      </div>

      {/* Resources */}
      <div className="card">
        <h3>🖼️ Free Image Resources</h3>
        <p>Need images for training? Use these copyright-free sources:</p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>
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
