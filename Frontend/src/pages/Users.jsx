import React from "react";

function Users() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Manage your account, view orders, and update preferences.
        </p>

        {/* Dashboard Placeholder */}
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">User info and settings will appear here.</p>
        </div>
      </div>
    </div>
  );
}

export default Users;
