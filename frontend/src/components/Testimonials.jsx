import React from "react";

const Testimonials = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-lg p-6">
          <p className="italic">"This tool saved us hours of manual data entry every week!"</p>
          <p className="mt-4 text-right">- John D., Accountant</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="italic">"The AI extraction feature is incredibly accurate and fast."</p>
          <p className="mt-4 text-right">- Sarah L., Operations Manager</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
