import React from 'react';

interface FeaturesListProps {
  features: string[];
  errors?: string[];
  onChange: (features: string[]) => void;
}

const FeaturesList: React.FC<FeaturesListProps> = ({ features, errors = [], onChange }) => {
  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    onChange(updatedFeatures);
  };

  const addFeature = () => {
    onChange([...features, '']);
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    onChange(updatedFeatures);
  };

  const moveFeature = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === features.length - 1)
    ) {
      return;
    }

    const updatedFeatures = [...features];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    [updatedFeatures[index], updatedFeatures[newIndex]] = 
    [updatedFeatures[newIndex], updatedFeatures[index]];
    
    onChange(updatedFeatures);
  };

  return (
    <div className="features-list">
      <div className="form-group">
        <label htmlFor="features" className="form-label">Product Features</label>
        <p className="form-hint">Add at least 3 features to describe the shoe</p>
        
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-input-group">
              <input
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                placeholder={`Feature ${index + 1}`}
                className={`form-input ${errors[index] ? 'error' : ''}`}
              />
              <div className="feature-actions">
                <button 
                  type="button" 
                  onClick={() => moveFeature(index, 'up')}
                  disabled={index === 0}
                  className="feature-btn"
                  aria-label="Move feature up"
                >
                  ↑
                </button>
                <button 
                  type="button" 
                  onClick={() => moveFeature(index, 'down')}
                  disabled={index === features.length - 1}
                  className="feature-btn"
                  aria-label="Move feature down"
                >
                  ↓
                </button>
                <button 
                  type="button" 
                  onClick={() => removeFeature(index)}
                  className="feature-btn remove"
                  disabled={features.length <= 3}
                  aria-label="Remove feature"
                >
                  ×
                </button>
              </div>
            </div>
            {errors[index] && <div className="error-message">{errors[index]}</div>}
          </div>
        ))}
        
        <button 
          type="button" 
          onClick={addFeature}
          className="add-feature-btn"
        >
          + Add Feature
        </button>
      </div>
    </div>
  );
};

export default FeaturesList; 