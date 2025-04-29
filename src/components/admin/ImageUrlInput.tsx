import React, { useState, useEffect } from 'react';

interface ImageUrlInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  id?: string;
}

const ImageUrlInput: React.FC<ImageUrlInputProps> = ({ 
  value, 
  onChange, 
  error, 
  id = 'image-url' 
}) => {
  const [isPreviewLoaded, setIsPreviewLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewError, setPreviewError] = useState<string | null>(null);

  useEffect(() => {
    if (value) {
      setIsLoading(true);
      setPreviewError(null);
      
      const img = new Image();
      img.src = value;
      
      img.onload = () => {
        setIsPreviewLoaded(true);
        setIsLoading(false);
      };
      
      img.onerror = () => {
        setIsPreviewLoaded(false);
        setIsLoading(false);
        setPreviewError('Image failed to load. Please check the URL.');
      };
    } else {
      setIsPreviewLoaded(false);
      setPreviewError(null);
    }
  }, [value]);

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">Image URL</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com/image.jpg"
        className={`form-input ${error || previewError ? 'error' : ''}`}
      />
      {(error || previewError) && (
        <div className="error-message">{error || previewError}</div>
      )}
      
      <div className="image-preview-container">
        {isLoading && (
          <div className="image-loading">Loading image preview...</div>
        )}
        
        {!isLoading && value && isPreviewLoaded && (
          <div className="image-preview">
            <p className="preview-label">Preview:</p>
            <img 
              src={value}
              alt="Shoe preview"
              className="preview-image"
            />
          </div>
        )}
        
        {!isLoading && !value && (
          <div className="image-placeholder">
            <p>Enter an image URL to see a preview</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUrlInput; 