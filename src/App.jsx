import { useState } from 'react';
import PrebuiltClassifier from './components/PrebuiltClassifier';
import CustomTraining from './components/CustomTraining';

function App() {
  const [activeTab, setActiveTab] = useState('prebuilt');

  return (
    <div className="container">
      <header style={{ marginBottom: '2rem' }}>
        <h1>🎯 Vision Quest</h1>
        <p>Build your own AI-powered image classifier</p>
      </header>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'prebuilt' ? 'active' : ''}`}
          onClick={() => setActiveTab('prebuilt')}
        >
          Pre-built Classifier
        </button>
        <button
          className={`tab ${activeTab === 'custom' ? 'active' : ''}`}
          onClick={() => setActiveTab('custom')}
        >
          Custom Training
        </button>
      </div>

      {activeTab === 'prebuilt' && <PrebuiltClassifier />}
      {activeTab === 'custom' && <CustomTraining />}
    </div>
  );
}

export default App;
