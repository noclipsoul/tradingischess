import React, { useState, useEffect } from "react";
import { assignFormToEntity, fetchFormForEntity } from "../api/api";
import DynamicForm from "../components/DynamicForm";

const EntityFormPage = () => {
  const [entityName, setEntityName] = useState(""); // For the entity name input
  const [formName, setFormName] = useState(""); // For the form name input
  const [loadedForm, setLoadedForm] = useState(null); // To store the loaded form data
  const [error, setError] = useState(null); // To handle errors

  // Assign a form to an entity
  const handleAssignForm = async () => {
    try {
      if (!entityName || !formName) {
        alert("Both entity name and form name are required.");
        return;
      }
      await assignFormToEntity({ entityName, formName });
      alert(`Form "${formName}" assigned to entity "${entityName}" successfully.`);
    } catch (err) {
      console.error(err);
      alert("Failed to assign form. Please try again.");
    }
  };

  // Load the form assigned to the entity
  const handleLoadForm = async () => {
    try {
      if (!entityName) {
        alert("Entity name is required to load the form.");
        return;
      }
      const form = await fetchFormForEntity(entityName);
      setLoadedForm(form);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load form. Please ensure the entity has a form assigned.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Entity Form Management</h1>

      {/* Assign Form Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Assign Form to Entity</h2>
        <div className="flex gap-4">
          <input
            type="text"
            className="border rounded p-2 w-1/3"
            placeholder="Entity Name"
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
          />
          <input
            type="text"
            className="border rounded p-2 w-1/3"
            placeholder="Form Name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          
          <button
            onClick={handleAssignForm}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Assign Form
          </button>
        </div>
      </div>

      {/* Load Form Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Load Assigned Form</h2>
        <div className="flex gap-4">
          <input
            type="text"
            className="border rounded p-2 w-1/3"
            placeholder="Entity Name"
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
          />
          <button
            onClick={handleLoadForm}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Load Form
          </button>
        </div>
      </div>

      {/* Render Loaded Form */}
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {loadedForm ? (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Rendered Form</h3>
            <DynamicForm form={loadedForm} />
          </div>
        ) : (
          <p className="text-gray-500">No form loaded yet. Enter an entity name and click "Load Form".</p>
        )}
      </div>
    </div>
  );
};

export default EntityFormPage;
