const express = require('express');
const router = express.Router();
const FormComp  = require('../models/formcomp'); // Adjust the path to your FormComp model

// Create a new FormComp
router.post('/add', async (req, res) => {
  try {
    const data = req.body;
    const formcm =  new FormComp(data);
    const svformcm= await formcm.save() ;

    res.status(201).send(svformcm);
  } catch (error) {
    console.error('Error creating form component:', error);
    res.status(500).send({ error: 'Failed to create form component' });
  }
});

// Get all FormComps
router.get('/getall', async (req, res) => {
  try {
    const formComps = await FormComp.find({});
    res.status(200).send(formComps);
  } catch (error) {
    console.error('Error fetching form components:', error);
    res.status(500).send({ error: 'Failed 5 to fetch form components' });
  }
});

// Get a single FormComp by ID
router.get('/get/:id', async (req, res) => {
  try {
    const id  = req.params.id;
    const formComp = await FormComp.findById(id);

    if (!formComp) {
      return res.status(404).send({ error: 'Form component not found' });
    }

    res.status(200).send(formComp);
  } catch (error) {
    console.error('Error fetching form component:', error);
    res.status(500).send({ error: 'Failed to fetch form component' });
  }
});

// Update a FormComp by ID
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const formComp = await FormComp.findByPk(id);

    if (!formComp) {
      return res.status(404).send({ error: 'Form component not found' });
    }

    const updatedFormComp = await formComp.update(data);
    res.status(200).send(updatedFormComp);
  } catch (error) {
    console.error('Error updating form component:', error);
    res.status(500).send({ error: 'Failed to update form component' });
  }
});

// Delete a FormComp by ID
router.get('/delete/:id', async (req, res) => {
  try {
    const  id  = req.params.id;
    const  name  = req.params.name;
    console.log(name)
    const formComp = await FormComp.findByIdAndDelete(id);

    if (!formComp) {
      return res.status(404).send({ error: 'Form component not found' });
    }

    
    res.status(200).send({ message: 'Form component deleted successfully' });
  } catch (error) {
    console.error('Error deleting form component:', error);
    res.status(500).send({ error: 'Failed to delete form component' });
  }
});

module.exports = router;
