// import React, { useEffect, useState } from "react";

// const InvoiceList = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/invoices/fetchInvoices"); // Backend API endpoint
//         const data = await response.json();
//         setInvoices(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching invoices:", error);
//         setLoading(false);
//       }
//     };

//     fetchInvoices();
//   }, []);

//   if (loading) return <p>Loading invoices...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Invoices</h2>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">Invoice Number</th>
//             <th className="border border-gray-300 px-4 py-2">Customer Name</th>
//             <th className="border border-gray-300 px-4 py-2">Total Amount</th>
//             <th className="border border-gray-300 px-4 py-2">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoices.map((invoice) => (
//             <tr key={invoice._id}>
//               <td className="border border-gray-300 px-4 py-2">{invoice.invoiceNumber}</td>
//               <td className="border border-gray-300 px-4 py-2">{invoice.customerName}</td>
//               <td className="border border-gray-300 px-4 py-2">{invoice.totalAmount}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {new Date(invoice.date).toLocaleDateString()}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InvoiceList;
