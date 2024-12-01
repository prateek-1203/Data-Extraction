import React from "react";
// import { useSelector } from "react-redux";

const Summary = () => {
  // const { invoices, products, customers } = useSelector((state) => state.data);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Summary</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-lg">
          <strong>Total Invoices:</strong> {0}
        </p>
        <p className="text-lg">
          <strong>Total Products:</strong> {0}
        </p>
        <p className="text-lg">
          <strong>Total Customers:</strong> {0}
        </p>
      </div>
    </section>
  );
};

export default Summary;
