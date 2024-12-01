import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import InvoiceList from "./pages/InvoiceList";


const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path: "/invoices",
    element: <InvoiceList />
  },
])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
