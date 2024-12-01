import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Automated Invoice Data Manager</h1>
        <p className="mt-2 text-lg">
          Effortlessly extract, process, and manage invoices, products, and customer data.
        </p>
      </div>
    </header>
  );
};

export default Header;
