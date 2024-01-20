// components/UserProfile.js
import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p className="mb-2">Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more profile details */}
    </div>
  );
};

export default UserProfile;
