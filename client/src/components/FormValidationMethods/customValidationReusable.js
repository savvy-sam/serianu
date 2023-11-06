import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: {
      value: '',
      valid: false,
      validationRules: {
        required: true,
        minLength: 3,
      },
      touched: false,
    },
    email: {
      value: '',
      valid: false,
      validationRules: {
        required: true,
        isEmail: true,
      },
      touched: false,
    },
    // Add more fields here
  });

  const [formValid, setFormValid] = useState(false);

  const validateRequired = (value) => value.trim() !== '';
  const validateMinLength = (value, minLength) => value.length >= minLength;
  const validateIsEmail = (value) => {
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailPattern.test(value);
  };

  const validateField = (fieldName) => {
    const field = formData[fieldName];
    let isValid = true;

    for (const rule in field.validationRules) {
      if (rule === 'required') {
        isValid = isValid && validateRequired(field.value);
      } else if (rule === 'minLength') {
        isValid = isValid && validateMinLength(field.value, field.validationRules[rule]);
      } else if (rule === 'isEmail') {
        isValid = isValid && validateIsEmail(field.value);
      }
    }

    field.valid = isValid;
    setFormData({ ...formData, [fieldName]: field });
  };

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const updatedFormData = {
      ...formData,
      [fieldName]: {
        ...formData[fieldName],
        value: fieldValue,
        touched: true,
      },
    };

    setFormData(updatedFormData, () => {
      validateField(fieldName);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValid = Object.values(formData).every((field) => field.valid);
    setFormValid(formValid);

    if (formValid) {
      console.log('Form is valid. Submitting...');
    } else {
      console.log('Form is not valid. Please check the fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name.value}
        onChange={handleInputChange}
        onBlur={() => validateField('name')}
      />
      <input
        type="text"
        name="email"
        value={formData.email.value}
        onChange={handleInputChange}
        onBlur={() => validateField('email')}
      />
      {/* Add more input fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
