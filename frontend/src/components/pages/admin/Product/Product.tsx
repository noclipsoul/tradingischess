import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";



interface Product {
  _id: string;
  name: string;
  discription: string;
  pform: [];
  image: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Use navigate hook for redirection

  const fetchProducts = async () => {
    try {
      const response = await fetch("/product/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/Product/delete/${id}`);
      if (!response.ok) {
        throw new Error("Failed to delete Product");
      }
      await fetchProducts();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Function to handle the update button click
  const handleUpdate = (id: string) => {
    navigate(`/admin/updateProduct/${id}`); // Redirect to the edit Product page
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        <section id="products" className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Products</h3>
          <Link
            to="/admin/addproduct"
            className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
          >
            Add
          </Link>

          <div className="p-4 bg-white shadow rounded-md">
            {loading ? (
              <p className="text-center">Loading Products...</p>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : products.length > 0 ? (
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Discription</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((Product) => (
                    <tr key={Product._id}>
                      <td className="border border-gray-300 px-4 py-2">{Product._id}</td>
                      <td className="border border-gray-300 px-4 py-2">{Product.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{Product.discription}</td>
                   
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          type="button"
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
                          onClick={() => handleDelete(Product._id)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                          onClick={() => handleUpdate(Product._id)} // Call handleUpdate with Product ID
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">No Products found.</p>
            )}
          </div>
          
        </section>
        <Outlet />
        
      </main>
      
    </div>
    
  );
};

export default Dashboard;
