import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const saveForm = (data) => API.post("/forms", data);
export const assignFormToEntity = (data) => API.post("/entities", data);
export const fetchFormForEntity = (entityName) => API.get(`/entities/${entityName}/form`);
export const fetchForm = (formName) => API.get(`/forms/${formName}`);
