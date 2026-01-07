function ConfidenceVisualizer({ prediction, label }) {
  if (!prediction) return null;

  const confidence = prediction.probability * 100;
  const confidenceLevel = confidence > 80 ? 'high' : confidence > 50 ? 'medium' : 'low';

  return (
    <div className="alert success">
      <h3>Prediction:</h3>
      <p className="prediction-label">
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
