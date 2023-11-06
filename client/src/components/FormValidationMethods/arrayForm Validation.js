import React, { useState } from 'react';

function EducationForm() {
  const [educationData, setEducationData] = useState([
    {
      school: '',
      degree: '',
      graduationYear: '',
    },
  ]);

  const [errors, setErrors] = useState([{}]);

  const addEducationEntry = () => {
    setEducationData([
      ...educationData,
      {
        school: '',
        degree: '',
        graduationYear: '',
      },
    ]);

    setErrors([...errors, {}]);
  };

  const handleInputChange = (index, key, value) => {
    const updatedEducationData = [...educationData];
    updatedEducationData[index][key] = value;
    setEducationData(updatedEducationData);

    const updatedErrors = [...errors];
    updatedErrors[index][key] = ''; // Clear the error for the field
    setErrors(updatedErrors);
  };

  const validateFields = () => {
    const newErrors = [];
    const isValid = educationData.every((education, index) => {
      const { school, degree, graduationYear } = education;
      const error = {};

      if (!school) {
        error.school = 'School is required';
      }
      if (!degree) {
        error.degree = 'Degree is required';
      }
      if (!graduationYear) {
        error.graduationYear = 'Graduation year is required';
      }

      newErrors[index] = error;
      return Object.keys(error).length === 0;
    });

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log('Form data is valid:', educationData);
    } else {
      console.log('Form data is invalid');
    }
  };

  return (
    <div>
      <form>
        {educationData.map((education, index) => (
          <div key={index} className="my-4 p-4 border rounded-lg">
            <input
              type="text"
              placeholder="School"
              value={education.school}
              onChange={(e) => handleInputChange(index, 'school', e.target.value)}
              className={`form-field ${errors[index].school && 'border-red-500'}`}
            />
            <span className="text-red-500">{errors[index].school}</span>

            <input
              type="text"
              placeholder="Degree"
              value={education.degree}
              onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
              className={`form-field ${errors[index].degree && 'border-red-500'}`}
            />
            <span className="text-red-500">{errors[index].degree}</span>

            <input
              type="text"
              placeholder="Graduation Year"
              value={education.graduationYear}
              onChange={(e) => handleInputChange(index, 'graduationYear', e.target.value)}
              className={`form-field ${errors[index].graduationYear && 'border-red-500'}`}
            />
            <span className="text-red-500">{errors[index].graduationYear}</span>
          </div>
        ))}
        <button type="button" onClick={addEducationEntry} className="my-4 p-2 bg-blue-500 text-white rounded">
          Add Education
        </button>
        <button type="button" onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EducationForm;