import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

interface User {
  _id: string;
  user_name: string;
  email: string;
  password: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Use navigate hook for redirection

  const fetchUsers = async () => {
    try {
      const response = await fetch("/user/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/user/delete/${id}`);
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      await fetchUsers();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Function to handle the update button click
  const handleUpdate = (id: string) => {
    navigate(`/admin/updateuser/${id}`); // Redirect to the edit user page
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        <section id="users" className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Users</h3>
          <Link
            to="/admin/adduser"
            className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
          >
            Add
          </Link>

          <div className="p-4 bg-white shadow rounded-md">
            {loading ? (
              <p className="text-center">Loading users...</p>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : users.length > 0 ? (
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className="border border-gray-300 px-4 py-2">{user._id}</td>
                      <td className="border border-gray-300 px-4 py-2">{user.user_name}</td>
                      <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                   
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          type="button"
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                          onClick={() => handleUpdate(user._id)} // Call handleUpdate with user ID
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">No users found.</p>
            )}
          </div>
        </section>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
