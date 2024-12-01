import React from "react";

const Features = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold">AI-Powered Extraction</h3>
          <p>Utilize cutting-edge AI to extract data from PDFs, Excel files, and images.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold">Real-Time Updates</h3>
          <p>Ensure data consistency across tabs with automatic synchronization.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
          <p>Navigate with ease using an intuitive, responsive design.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
