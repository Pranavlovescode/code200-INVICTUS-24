// // pages/UserProfilePage.js
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import UserProfile from './UserProfile';
// import QualificationForm from './QualificationForm';
// import CourseRecommendations from '../components/CourseRecommendation';
// import { fireDB,auth, Timestamp } from '../firebase/FirebaseConfig';
// import { collection, query, where, onSnapshot } from 'firebase/firestore'; // Import Firestore functions

// const UserProfilePage = () => {
//   const location = useLocation();
//   const user = location.state.user;

//   const [qualification, setQualification] = useState('');
//   const [recommendedCourses, setRecommendedCourses] = useState([]);

//   useEffect(() => {
//     // Replace this with your actual Firestore collection reference
//     const coursesRef = collection(fireDB, 'courses');

//     // Example: Fetch courses based on qualification
//     const qualificationQuery = query(coursesRef, where('qualification', '==', qualification));
    
//     // Example: Subscribe to changes in the query
//     const unsubscribe = onSnapshot(qualificationQuery, (snapshot) => {
//       const coursesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setRecommendedCourses(coursesData);
//     });

//     // Cleanup function
//     return () => unsubscribe();
//   }, [qualification]);

//   const handleQualificationSubmit = (newQualification) => {
//     setQualification(newQualification);
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <UserProfile user={user} />
//       <QualificationForm onSubmit={handleQualificationSubmit} />
//       <CourseRecommendations courses={recommendedCourses} />
//     </div>
//   );
// };

// export default UserProfilePage;

// pages/UserProfilePage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';
import QualificationForm from './QualificationForm';
import CourseRecommendations from '../components/CourseRecommendation';
import courses from '../courses'; // Import courses data

const UserProfilePage = () => {
  const location = useLocation();
  const user = location.state.user;

  const [qualification, setQualification] = useState('');
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    // Fetch recommended courses based on the qualification
    // Update recommendedCourses state accordingly
  }, [qualification]);

  const handleQualificationSubmit = ({ selectedCourse, qualification }) => {
    setQualification(qualification);
    // Perform logic to fetch recommended courses based on the selectedCourse and qualification
    // Update recommendedCourses state accordingly
  };

  return (
    <div className="container mx-auto mt-8">
      <UserProfile user={user} />
      <QualificationForm onSubmit={handleQualificationSubmit} courses={courses} />
      <CourseRecommendations courses={recommendedCourses} />
    </div>
  );
};

export default UserProfilePage;

