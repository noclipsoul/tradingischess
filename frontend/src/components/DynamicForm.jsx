import React, { useEffect, useState } from "react";
import { fetchFormForEntity } from "../api/api";

const DynamicForm = ({ entityName }) => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetchFormForEntity(entityName).then((res) => setForm(res.data));
  }, [entityName]);

  return form ? (
    <form>
      {form.components.map((comp, idx) => (
        <div key={idx}>
          <label>{comp.label}</label>
          <input type={comp.type} className="border p-2" />
        </div>
      ))}
      <button type="submit" className="btn">Submit</button>
    </form>
  ) : <div>Loading...</div>;
};

export default DynamicForm;
