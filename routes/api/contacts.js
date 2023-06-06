const express = require("express");
const contacts = require("../../contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await contacts.getContactById(id)
    
    if(!result) {
      throw new Error();
    }

    res.json(result)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
