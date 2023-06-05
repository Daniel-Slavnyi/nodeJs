const express = require("express");
const contacts = require("../../contacts/contacts");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(contacts);
});

module.exports = router;
