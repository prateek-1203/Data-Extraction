
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String, // Invoice Number (optional, extracted from document)
  customerName: String, // Customer Name (optional, extracted from document)
  totalAmount: Number, // Total Amount (optional, extracted from document)
  date: { type: Date, default: Date.now }, // Invoice Date
  items: [
    {
      productName: String, // Name of product/item
      quantity: Number, // Quantity of product/item
      price: Number, // Price of product/item
    },
  ],
  extractedText: String, // Full text extracted from the document
  structuredData: mongoose.Schema.Types.Mixed, // Structured data from Gemini API
  fileType: String, // Type of uploaded file (e.g., PDF, Excel, Image)
  filePath: String, // Path where the uploaded file is stored
  createdAt: { type: Date, default: Date.now }, // Timestamp for record creation
});

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
