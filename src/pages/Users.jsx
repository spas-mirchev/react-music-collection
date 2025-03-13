import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';

const Users = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <Link 
          to="/" 
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded"
        >
          Back to Home
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md">
        <UserList />
      </div>
    </div>
  );
};

export default Users; 