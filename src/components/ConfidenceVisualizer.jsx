function ConfidenceVisualizer({ prediction, label }) {
  if (!prediction) return null;

  const confidence = prediction.probability * 100;
  
  let confidenceLevel;
  if (confidence > 80) {
    confidenceLevel = 'high';
  } else if (confidence > 50) {
    confidenceLevel = 'medium';
  } else {
    confidenceLevel = 'low';
  }

  return (
    <div className="alert success">
      <h3>Prediction:</h3>
      <p className="font-bold" style={{ fontSize: '1.25rem', color: '#065f46' }}>
        {label || prediction.className}
      </p>

      <div className="confidence-visualizer">
        <p>Confidence:</p>
        <div className="confidence-bar-container">
          <div className={`confidence-bar ${confidenceLevel}`} style={{ width: `${confidence}%` }}>
            {confidence.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfidenceVisualizer;
