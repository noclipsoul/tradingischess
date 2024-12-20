import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface PForm {
  _id: string;
  name: string;
  form_components: string[];
  product: Product; // product is now an object of type Product
}

const PFormPage: React.FC = () => {
  const [pforms, setPForms] = useState<PForm[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPForms = async () => {
    try {
      const response = await fetch("/pform/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch PForms");
      }
      const data: PForm[] = await response.json();
      setPForms(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPForms();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PForms</h1>
      {error && <p className="text-red-500">{error}</p>}
      <Link
        to="/admin/AddPform"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create New PForm
      </Link>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pforms.map((pform) => (
            <tr key={pform._id}>
              <td className="border border-gray-300 px-4 py-2">{pform._id}</td>
              <td className="border border-gray-300 px-4 py-2">{pform.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {pform.product?.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  to={`/pform/edit/${pform._id}`}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    // Delete logic here
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PFormPage;
