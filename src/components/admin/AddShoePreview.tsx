import React from 'react';
import { ShoeFormData } from './FormValidation';

interface AddShoePreviewProps {
  formData: ShoeFormData;
}

const AddShoePreview: React.FC<AddShoePreviewProps> = ({ formData }) => {
  const { name, description, price, image, features } = formData;
  
  const priceValue = typeof price === 'string' 
    ? price.length > 0 ? parseFloat(price) : 0 
    : price;
  
  const formattedPrice = !isNaN(priceValue) 
    ? `$${priceValue.toFixed(2)}` 
    : 'TBD';

  return (
    <div className="preview-section">
      <h3 className="preview-title">Live Preview</h3>
      
      <div className="shoe-card-preview">
        <div className="card">
          <div className="card-image-container">
            {image ? (
              <img 
                src={image} 
                alt={name || 'Shoe preview'} 
                className="card-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Image+Preview';
                }}
              />
            ) : (
              <div className="placeholder-image">No Image</div>
            )}
          </div>
          
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">{name || 'Shoe Name'}</h3>
              <span className="card-price">{formattedPrice}</span>
            </div>
            
            <p className="card-description">
              {description || 'Shoe description will appear here...'}
            </p>
            
            <div className="card-features">
              {features && features.length > 0 ? (
                <ul className="feature-list">
                  {features.filter(f => f.trim()).map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-features">No features added yet</p>
              )}
            </div>
            
            <button className="preview-button" disabled>
              Pre-order Now
            </button>
          </div>
        </div>
      </div>
      
      <p className="preview-note">
        This is how the shoe will appear on the website. 
        Complete the form to see all details in the preview.
      </p>
    </div>
  );
};

export default AddShoePreview; 