// components/CourseRecommendations.js
import React from 'react';

const CourseRecommendations = ({ courses }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="mb-2">{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRecommendations;
