import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PFormAdd: React.FC = () => {
  const [PformnameName, setPformname] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);
  
  
  const [formComponents, setFormComponents] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();




  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/product/getall");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    const fetchFormComponents = async () => {
      try {
        const response = await fetch("/formcomp/getall");
        if (!response.ok) throw new Error("Failed to fetch form components");
        const data = await response.json();
        setFormComponents(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchProducts();
    fetchFormComponents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/pform/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: PformnameName,
          product: selectedProduct,
          form_components: selectedComponents,
        }),
      });
      if (!response.ok) throw new Error("Failed to create PForm");
      navigate("/admin/PForm");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create PForm</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          
          <label className="block text-gray-700 font-bold mb-2">Product</label>
          <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={PformnameName}
            onChange={(e) => setPformname(e.target.value)}

          />
        </div>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
            className="shadow border rounded w-full py-2 px-3"
          >
            <option value="">Select a Product</option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Form Components</label>
          <select
            multiple
            value={selectedComponents}
            onChange={(e) =>
              setSelectedComponents(Array.from(e.target.selectedOptions, (option) => option.value))
            }
            className="shadow border rounded w-full py-2 px-3"
          >
            {formComponents.map((comp) => (
              <option key={comp._id} value={comp._id}>
                {comp.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default PFormAdd;
