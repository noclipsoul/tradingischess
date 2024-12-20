const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// Save Form
router.post("/forms", async (req, res) => {
  const { formName, components } = req.body;
  try {
    const form = new Form({ formName, components });
    await form.save();
    res.status(201).json({ message: "Form saved successfully", form });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch Form
router.get("/forms/:formName", async (req, res) => {
  try {
    const form = await Form.findOne({ formName: req.params.formName });
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
