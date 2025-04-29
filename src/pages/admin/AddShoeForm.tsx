import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturesList from '../../components/admin/FeaturesList';
import ImageUrlInput from '../../components/admin/ImageUrlInput';
import AddShoePreview from '../../components/admin/AddShoePreview';
import { ShoeFormData, FormErrors, validateShoeForm, hasErrors, formatPrice } from '../../components/admin/FormValidation';

// For demo purposes, we'll simulate an API
const mockAddShoe = async (data: ShoeFormData): Promise<{ success: boolean; id?: number }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate successful response
  return {
    success: true,
    id: Math.floor(Math.random() * 1000) + 5  // Generate a random ID
  };
};

const AddShoeForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ShoeFormData>({
    name: '',
    description: '',
    price: '',
    image: '',
    features: ['', '', '']  // Start with 3 empty features
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  
  // Load saved form data from localStorage on initial render
  useEffect(() => {
    const savedForm = localStorage.getItem('addShoeForm');
    if (savedForm) {
      try {
        const parsedForm = JSON.parse(savedForm);
        setFormData(parsedForm);
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }, []);
  
  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('addShoeForm', JSON.stringify(formData));
  }, [formData]);
  
  // Validate form whenever data changes
  useEffect(() => {
    if (Object.keys(touched).length > 0 || submitted) {
      const validationErrors = validateShoeForm(formData);
      setErrors(validationErrors);
    }
  }, [formData, touched, submitted]);
  
  const handleChange = (field: keyof ShoeFormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };
  
  const handlePriceChange = (value: string) => {
    const formattedValue = formatPrice(value);
    handleChange('price', formattedValue);
  };
  
  const handleBlur = (field: string) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmitted(true);
    const validationErrors = validateShoeForm(formData);
    setErrors(validationErrors);
    
    if (!hasErrors(validationErrors)) {
      setIsSubmitting(true);
      
      try {
        const result = await mockAddShoe(formData);
        
        if (result.success) {
          // Clear form from localStorage
          localStorage.removeItem('addShoeForm');
          
          // Show success message and redirect
          alert(`Shoe "${formData.name}" added successfully!`);
          navigate('/shoes');
        }
      } catch (error) {
        console.error('Error adding shoe:', error);
        alert('Failed to add the shoe. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Scroll to the first error
      const firstErrorField = document.querySelector('.error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  
  const handleReset = useCallback(() => {
    if (window.confirm('Are you sure you want to reset the form? All unsaved changes will be lost.')) {
      setFormData({
        name: '',
        description: '',
        price: '',
        image: '',
        features: ['', '', '']
      });
      setErrors({});
      setTouched({});
      setSubmitted(false);
      localStorage.removeItem('addShoeForm');
    }
  }, []);

  return (
    <div className="add-shoe-page">
      <div className="container">
        <div className="page-header">
          <h1>Add New Shoe</h1>
          <p className="page-description">
            Create a new shoe for the Vanguard 50th Anniversary collection
          </p>
        </div>
        
        <div className="form-preview-layout">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="add-shoe-form">
              {/* Name field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Shoe Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder="The Vanguard Classic"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
              {/* Description field */}
              <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  onBlur={() => handleBlur('description')}
                  placeholder="Describe the shoe in detail (20-500 characters)"
                  rows={4}
                  className={`form-textarea ${errors.description ? 'error' : ''}`}
                />
                {errors.description && (
                  <div className="error-message">{errors.description}</div>
                )}
              </div>
              
              {/* Price field */}
              <div className="form-group">
                <label htmlFor="price" className="form-label">Price (USD)</label>
                <div className="price-input-container">
                  <span className="price-symbol">$</span>
                  <input
                    type="text"
                    id="price"
                    value={formData.price}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    onBlur={() => handleBlur('price')}
                    placeholder="179.99"
                    className={`form-input price-input ${errors.price ? 'error' : ''}`}
                  />
                </div>
                {errors.price && <div className="error-message">{errors.price}</div>}
              </div>
              
              {/* Image URL field with preview */}
              <ImageUrlInput
                value={formData.image}
                onChange={(value) => handleChange('image', value)}
                error={errors.image}
              />
              
              {/* Features list */}
              <FeaturesList
                features={formData.features}
                errors={errors.featureItems}
                onChange={(features) => handleChange('features', features)}
              />
              {errors.features && <div className="error-message">{errors.features}</div>}
              
              {/* Form actions */}
              <div className="form-actions">
                <button 
                  type="button" 
                  onClick={handleReset}
                  className="reset-button"
                  disabled={isSubmitting}
                >
                  Reset Form
                </button>
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Adding Shoe...' : 'Add Shoe'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Live Preview */}
          <div className="preview-container">
            <AddShoePreview formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShoeForm; 