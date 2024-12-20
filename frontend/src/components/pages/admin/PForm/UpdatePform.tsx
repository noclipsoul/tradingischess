import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PFormUpdate: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [formComponents, setFormComponents] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/product/list");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    const fetchFormComponents = async () => {
      setLoading(true);
      try {
        const response = await fetch("/formcomp/list");
        if (!response.ok) throw new Error("Failed to fetch form components");
        const data = await response.json();
        setFormComponents(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    fetchFormComponents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProduct || selectedComponents.length === 0) {
      setError("Please select both a product and at least one form component.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/pform/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: selectedProduct,
          form_components: selectedComponents,
        }),
      });
      if (!response.ok) throw new Error("Failed to create PForm");
      navigate("/pform/list");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create PForm</h1>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p className="text-gray-500">Loading...</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Product</label>
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
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default PFormUpdate;
