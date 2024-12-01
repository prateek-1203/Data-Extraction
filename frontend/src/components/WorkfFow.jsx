import React from "react";

const Workflow = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">Step 1</h3>
          <p>Upload a file (PDF, Excel, or Image).</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">Step 2</h3>
          <p>AI processes the data to extract key details.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">Step 3</h3>
          <p>View organized tabs for Invoices, Products, and Customers.</p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
