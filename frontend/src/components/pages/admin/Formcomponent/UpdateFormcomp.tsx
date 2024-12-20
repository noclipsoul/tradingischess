import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFormComp: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    options: "",
    placeholder: "",
    required: false,
    order: undefined,
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchFormComp = async () => {
    try {
      const response = await fetch(`/formcomp/get/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch form component");
      }
      const data = await response.json();
      setFormData({
        ...data,
        options: data.options.join(","),
      });
    } catch (err) {
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    if (id) fetchFormComp();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const { checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/formcomp/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, options: formData.options.split(",") }),
      });

      if (!response.ok) {
        throw new Error("Failed to update form component");
      }

      navigate("/admin/dashboard"); // Redirect to the dashboard after success
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Edit Form Component</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Type</option>
            {[
              "checkbox",
              "radiobox",
              "dropdown",
              "text",
              "textarea",
              "email",
              "password",
              "number",
              "url",
              "tel",
              "date",
              "time",
              "datetime-local",
              "color",
              "file",
              "range",
              "search",
              "multi-select",
              "toggle",
              "rating",
              "image",
              "rich-text",
              "address",
              "name",
              "captcha",
              "tags",
              "dynamic-list",
              "accordion",
              "hidden",
              "static-text",
            ].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Options (comma-separated)</label>
          <input
            type="text"
            name="options"
            value={formData.options}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Placeholder</label>
          <input
            type="text"
            name="placeholder"
            value={formData.placeholder}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Required</label>
          <input
            type="checkbox"
            name="required"
            checked={formData.required}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Order</label>
          <input
            type="number"
            name="order"
            value={formData.order || ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditFormComp;
