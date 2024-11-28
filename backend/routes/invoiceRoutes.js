const express = require("express");
const multer = require("multer");
const { uploadFile, getInvoices } = require("../controllers/invoiceController");

const router = express.Router();

// Multer setup
const upload = multer({ dest: "uploads/" });

// Routes
router.post("/upload", upload.single("file"), uploadFile);
// router.get("/fetchInvoices", getInvoices);

module.exports = router;
