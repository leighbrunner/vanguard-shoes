export interface FormErrors {
  name?: string;
  description?: string;
  price?: string;
  image?: string;
  features?: string;
  featureItems?: string[];
}

export interface ShoeFormData {
  name: string;
  description: string;
  price: string | number;
  image: string;
  features: string[];
}

export const validateShoeForm = (data: ShoeFormData): FormErrors => {
  const errors: FormErrors = {};
  const featureItemErrors: string[] = [];

  // Name validation
  if (!data.name) {
    errors.name = "Name is required";
  } else if (data.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  } else if (data.name.length > 50) {
    errors.name = "Name must be less than 50 characters";
  }

  // Description validation
  if (!data.description) {
    errors.description = "Description is required";
  } else if (data.description.length < 20) {
    errors.description = "Description must be at least 20 characters";
  } else if (data.description.length > 500) {
    errors.description = "Description must be less than 500 characters";
  }

  // Price validation
  if (!data.price) {
    errors.price = "Price is required";
  } else {
    const priceValue = typeof data.price === 'string' ? parseFloat(data.price) : data.price;
    if (isNaN(priceValue)) {
      errors.price = "Price must be a valid number";
    } else if (priceValue <= 0) {
      errors.price = "Price must be greater than zero";
    } else if (!/^\d+(\.\d{1,2})?$/.test(priceValue.toString())) {
      errors.price = "Price can have at most 2 decimal places";
    }
  }

  // Image URL validation
  if (!data.image) {
    errors.image = "Image URL is required";
  } else if (!/^https?:\/\/.+/.test(data.image)) {
    errors.image = "Image URL must be a valid URL starting with http:// or https://";
  }

  // Features validation
  if (!data.features || data.features.length < 3) {
    errors.features = "At least 3 features are required";
  } else {
    data.features.forEach((feature, index) => {
      if (feature.length < 5) {
        featureItemErrors[index] = "Feature must be at least 5 characters";
      } else if (feature.length > 100) {
        featureItemErrors[index] = "Feature must be less than 100 characters";
      }
    });
    
    if (featureItemErrors.some(error => error)) {
      errors.featureItems = featureItemErrors;
    }
  }

  return errors;
};

export const hasErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0 || 
         (!!errors.featureItems && errors.featureItems.some(error => !!error));
};

export const formatPrice = (value: string): string => {
  // Remove all non-digit characters except decimal point
  let sanitized = value.replace(/[^\d.]/g, '');
  
  // Ensure only one decimal point
  const parts = sanitized.split('.');
  if (parts.length > 2) {
    sanitized = parts[0] + '.' + parts.slice(1).join('');
  }
  
  // Limit to 2 decimal places
  if (parts.length === 2 && parts[1].length > 2) {
    sanitized = parts[0] + '.' + parts[1].substring(0, 2);
  }
  
  return sanitized;
}; 