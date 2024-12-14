import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const Addformcomp: React.FC = () => {
  const [formcompName, setformcompName] = useState<string>("");
  const [Discription, setDiscription] = useState<string>("");
  const [Pform, setPform] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!formcompName || !Discription || !Pform) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/formcomp/register", {  // Just use the endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formcomp_name: formcompName, Discription, Pform }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to register formcomp");
      }

      // Redirect to /admin/formcomps upon successful formcomp creation
      navigate("/admin/formcomps");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Add formcomp</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formcompName}
            onChange={(e) => setformcompName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Discription</label>
          <input
            type="Discription"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={Discription}
            onChange={(e) => setDiscription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pform</label>
          <input
            type="Pform"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={Pform}
            onChange={(e) => setPform(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Addformcomp;
