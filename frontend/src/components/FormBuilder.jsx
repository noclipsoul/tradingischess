import React, { useState } from "react";
import { saveForm } from "../api/api";

const FormBuilder = () => {
  const [components, setComponents] = useState([]);
  const [formName, setFormName] = useState("");

  const addComponent = (type) => {
    setComponents([...components, { type, label: "New Field" }]);
  };

  const handleSave = async () => {
    await saveForm({ formName, components });
    alert("Form saved!");
  };

  return (
    <div className="p-4">
      <input
        className="border p-2 mb-4"
        placeholder="Form Name"
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
      />
      <button onClick={() => addComponent("text")} className="btn">Add Text Input</button>
      <button onClick={handleSave} className="btn">Save Form</button>
      <div>
        {components.map((comp, idx) => (
          <div key={idx} className="border p-2 mt-2">{comp.type} - {comp.label}</div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
