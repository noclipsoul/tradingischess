import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";



interface FormComp {
  _id: string; // Unique identifier
  name: string; // Name of the component
  type: 
    | 'checkbox'
    | 'radiobox'
    | 'dropdown'
    | 'text'
    | 'textarea'
    | 'email'
    | 'password'
    | 'number'
    | 'url'
    | 'tel'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'color'
    | 'file'
    | 'range'
    | 'search'
    | 'multi-select'
    | 'toggle'
    | 'rating'
    | 'image'
    | 'rich-text'
    | 'address'
    | 'name'
    | 'captcha'
    | 'tags'
    | 'dynamic-list'
    | 'accordion'
    | 'hidden'
    | 'static-text'; // Input type
  options?: string[]; // Optional list of options for checkbox, radio, dropdown, etc.
  placeholder?: string; // Optional placeholder for text/textarea
  required: boolean; // Indicates if the field is mandatory
  order?: number; // Optional order for drag-and-drop sorting
}
const Dashboard: React.FC = () => {
 const [formcomps, setFormComps] = useState<FormComp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Use navigate hook for redirection

  const fetchformcomps = async () => {
    try {
      const response = await fetch("/formcomp/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch formcomps");
      }
      const data: FormComp[] = await response.json(); 
      setFormComps(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchformcomps();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/formcomp/delete/${id}`);
      if (!response.ok) {
        throw new Error("Failed to delete formcomp");
      }
      await fetchformcomps();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Function to handle the update button click
  const handleUpdate = (id: string) => {
    navigate(`/admin/updateformcomp/${id}`); // Redirect to the edit formcomp page
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        <section id="formcomps" className="mb-6">
          <h3 className="text-xl font-semibold mb-2">formcomps</h3>
          <Link
            to="/admin/addformcomp"
            className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
          >
            Add
          </Link>

          <div className="p-4 bg-white shadow rounded-md">
            {loading ? (
              <p className="text-center">Loading formcomps...</p>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : formcomps.length > 0 ? (
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">type</th>
                    <th className="border border-gray-300 px-4 py-2">option</th>
                    <th className="border border-gray-300 px-4 py-2">required</th>
                    <th className="border border-gray-300 px-4 py-2">placeholder</th>
                    <th className="border border-gray-300 px-4 py-2">order</th>
                    
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {formcomps.map((formcomp) => (
                    <tr key={formcomp._id}>
                      <td className="border border-gray-300 px-4 py-2">{formcomp._id}</td>
                      <td className="border border-gray-300 px-4 py-2">{formcomp.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{formcomp.type}</td>
                      <td className="border border-gray-300 px-4 py-2">{formcomp.options}</td>
                      <td className="border border-gray-300 px-4 py-2">{formcomp.required}</td>
                      <td className="border border-gray-300 px-4 py-2">{formcomp.placeholder}</td>
                      <td className="border border-gray-300 px-4 py-2">{formcomp.order}</td>
                   
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          type="button"
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
                          onClick={() => handleDelete(formcomp._id)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                          onClick={() => handleUpdate(formcomp._id)} // Call handleUpdate with formcomp ID
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">No formcomps found.</p>
            )}
          </div>
          
        </section>
        <Outlet />
        
      </main>
      
    </div>
    
  );
};

export default Dashboard;
