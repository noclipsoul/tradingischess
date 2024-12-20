const express = require("express");
const router = express.Router();
const PForm = require("../models/pform");

router.post("/create", async (req, res) => {
   try {
     const { name, form_components, product } = req.body;
 console.log(name)
     // Validate the required fields
     if (!name || !product) {
       return res.status(400).send({ message: "Name and Product are required" });
     }
 
     const pfm = new PForm({ name, form_components, product });

     const savedPfm = await pfm.save();
     
     res.status(200).send(savedPfm);
   } catch (error) {
     res.status(400).send(error);
   }
 });
 
// Get all PForms (populate product and form_components)
router.get("/getall", async (req, res) => {
  try {
    const pForms = await PForm.find()
      .populate("product") // Populate product details
      .populate("form_components"); // Populate form components
    res.status(200).send(pForms);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a PForm by ID
router.post("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPForm = await PForm.findOneAndDelete({ _id: id });
    if (!deletedPForm) {
      return res.status(404).send({ message: "PForm not found" });
    }
    res.status(200).send(deletedPForm);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a PForm by ID
router.post("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newPForm = req.body;
    const updatedPForm = await PForm.findOneAndUpdate(
      { _id: id },
      newPForm,
      { new: true } // Return the updated document
    )
      .populate("product") // Populate updated product
      .populate("form_components"); // Populate updated form components

    if (!updatedPForm) {
      return res.status(404).send({ message: "PForm not found" });
    }

    res.status(200).send(updatedPForm);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
