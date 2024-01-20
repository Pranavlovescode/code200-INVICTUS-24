// components/QualificationForm.js
import React, { useState } from 'react';

const QualificationForm = ({ onSubmit }) => {
  const [qualification, setQualification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(qualification);
  };

  return (
    <form className="bg-gray-100 p-4" onSubmit={handleSubmit}>
      <label className="block mb-2">
        Qualification:
        <input
          className="border p-2 w-full"
          type="text"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
      </label>
      <button className="bg-blue-500 text-white p-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default QualificationForm;
