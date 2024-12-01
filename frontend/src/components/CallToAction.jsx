
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const [message, setMessage] = useState(""); // To display feedback messages
  const [extractedText, setExtractedText] = useState(""); // Store extracted text from Gemini API response
  const navigate = useNavigate();

  // Handle file selection and upload
  const handleFileSelectAndUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setMessage("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setMessage("Uploading...");
      const response = await fetch("http://localhost:5000/api/invoices/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const candidates = data.generatedContent?.candidates || [];
        const textContent =
          candidates.length > 0 && candidates[0].content?.parts?.length > 0
            ? candidates[0].content.parts[0].text
            : "No content generated.";
        setExtractedText(textContent); // Store the text content in state
        setMessage("File processed successfully!");
        console.log("Extracted Text:", textContent); // Log the text for debugging
      } else {
        const errorMessage = await response.text();
        setMessage(`Failed to process the file: ${errorMessage}`);
        console.error("Server Error:", errorMessage);
      }
    } catch (error) {
      console.error("File upload failed:", error);
      setMessage("An error occurred while uploading the file.");
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
      <div className="flex gap-4">
        {/* Single Button to Select and Upload File */}
        <input
          type="file"
          onChange={handleFileSelectAndUpload}
          className="hidden" // Hide the default file input
          id="fileUpload"
        />
        <label
          htmlFor="fileUpload"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow cursor-pointer hover:bg-blue-600"
        >
          Select and Upload File
        </label>

        {/* Navigation buttons */}
        <button
          onClick={() => navigate("/invoices")}
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600"
        >
          View Invoices
        </button>
      </div>

      {/* Feedback Message */}
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}

      {/* Display Extracted Text */}
      {extractedText && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Generated Content:</h3>
          <pre>{extractedText}</pre> {/* Display only the extracted text */}
        </div>
      )}
    </section>
  );
};

export default CallToAction;
