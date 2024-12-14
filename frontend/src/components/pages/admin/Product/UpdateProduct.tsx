import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  discription: string;
  pform: [];
  image: string;
}

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract product id from URL
  const [product, setProduct] = useState<Product | null>(null); // State to store product data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [formData, setFormData] = useState<Product>({
    _id:"",
    name: "",
    discription: "",
    pform: [],
    image: "",
  }); // Form data state
  const navigate = useNavigate(); // To navigate after updating

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/Product/getProduct/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch Product");
        }
        const data: Product = await response.json();
      const Product= setProduct(data);
        setFormData(data); // Set the form data with the fetched product data
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
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
      const response = await fetch(`/Product/updateProduct/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update Product: ${response.status} - ${errorText}`);
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
        <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="product_name" className="block text-sm font-medium">
              name
            </label>
            <input
              type="text"
              id="product_name"
              name="product_name"
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
            Update Product
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditProduct;
