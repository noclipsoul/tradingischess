import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface formcomp {
  _id: string;
  name: string;
  discription: string;
  pform: [];
  image: string;
}

const Editformcomp: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract formcomp id from URL
  const [formcomp, setformcomp] = useState<formcomp | null>(null); // State to store formcomp data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [formData, setFormData] = useState<formcomp>({
    _id:"",
    name: "",
    discription: "",
    pform: [],
    image: "",
  }); // Form data state
  const navigate = useNavigate(); // To navigate after updating

  useEffect(() => {
    const fetchformcomp = async () => {
      try {
        const response = await fetch(`/formcomp/getformcomp/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch formcomp");
        }
        const data: formcomp = await response.json();
      const formcomp= setformcomp(data);
        setFormData(data); // Set the form data with the fetched formcomp data
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchformcomp();
  }, [id]);

  // Handle form field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/formcomp/updateformcomp/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update formcomp: ${response.status} - ${errorText}`);
      }
  
      navigate("/admin");
    } catch (err) {
      setError((err as Error).message);
    }
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        <h3 className="text-xl font-semibold mb-4">Edit formcomp</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="formcomp_name" className="block text-sm font-medium">
              name
            </label>
            <input
              type="text"
              id="formcomp_name"
              name="formcomp_name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.discription}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition-colors"
          >
            Update formcomp
          </button>
        </form>
      </main>
    </div>
  );
};

export default Editformcomp;
