import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddData from "./Componets/AddData/AddData";
import RetriveData from "./Componets/RetriveData/RetriveData";
import Layout from "./Componets/Layout/Layout";

function App() {
  // Creating Routes

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <>error</>,
      children: [
        {
          path: "/",
          element: <AddData />,
        },
        {
          path: "/retrivedata",
          element: <RetriveData />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
