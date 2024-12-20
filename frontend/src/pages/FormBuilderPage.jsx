import React, { useState } from "react";
import { saveForm } from "../api/api";

const FormBuilderPage = () => {
  const [formName, setFormName] = useState(""); // Form name input
  const [components, setComponents] = useState([]); // List of form components
  const [currentComponent, setCurrentComponent] = useState(null); // Currently dragged component

  const availableComponents = [
    { type: "text", label: "Text Input", placeholder: "Enter text..." },
    { type: "textarea", label: "Text Area", placeholder: "Enter details..." },
    { type: "password", label: "password", placeholder: "pass ***..." },
    { type: "button", label: "Submit Button" },
  ];

  // Add a component to the form
  const addComponent = (component) => {
    setComponents((prev) => [...prev, { ...component, id: Date.now() }]);
  };

  // Remove a component from the form
  const removeComponent = (id) => {
    setComponents((prev) => prev.filter((component) => component.id !== id));
  };

  // Save the form
  const handleSaveForm = async () => {
    try {
      if (!formName) {
        alert("Form name is required.");
        return;
      }
      if (components.length === 0) {
        alert("Form must have at least one component.");
        return;
      }
      await saveForm({ name: formName, components });
      alert(`Form "${formName}" saved successfully.`);
      setFormName("");
      setComponents([]);
    } catch (err) {
      console.error(err);
      alert("Failed to save form. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Form Builder</h1>

      {/* Form Name Input */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium">Form Name</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Enter form name..."
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
      </div>

      {/* Drag-and-Drop Components */}
      <div className="flex gap-6">
        {/* Available Components */}
        <div className="w-1/3 border rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Available Components</h2>
          <div className="space-y-4">
            {availableComponents.map((component, index) => (
              <div
                key={index}
                draggable
                onDragStart={() => setCurrentComponent(component)}
                className="p-2 border rounded bg-gray-100 cursor-pointer"
              >
                {component.label}
              </div>
            ))}
          </div>
        </div>

        {/* Droppable Form Area */}
        <div
          className="w-2/3 border-dashed border-2 rounded p-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => {
            if (currentComponent) {
              addComponent(currentComponent);
              setCurrentComponent(null);
            }
          }}
        >
          <h2 className="text-xl font-semibold mb-4">Form Preview</h2>
          {components.length > 0 ? (
            components.map((component) => (
              <div key={component.id} className="mb-4">
                {component.type === "text" && (
                  <div>
                    <label className="block mb-2">{component.label}</label>
                    <input
                      type="text"
                      className="border rounded p-2 w-full"
                      placeholder={component.placeholder}
                      disabled
                    />
                  </div>
                )}
                {component.type === "textarea" && (
                  <div>
                    <label className="block mb-2">{component.label}</label>
                    <textarea
                      className="border rounded p-2 w-full"
                      placeholder={component.placeholder}
                      disabled
                    ></textarea>
                  </div>
                )}
                 {component.type === "password" && (
                  <div>
                    <label className="block mb-2">{component.label}</label>
                    <password
                      className="password"
                      placeholder={component.placeholder}
                      disabled
                    ></password>
                  </div>
                )}
                {component.type === "button" && (
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled
                  >
                    {component.label}
                  </button>
                )}
                <button
                  onClick={() => removeComponent(component.id)}
                  className="text-red-500 text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Drag components here to build your form.</p>
          )}
        </div>
      </div>

      {/* Save Form Button */}
      <div className="mt-6">
        <button
          onClick={handleSaveForm}
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Save Form
        </button>
      </div>
    </div>
  );
};

export default FormBuilderPage;
