import "./App.css";
import { Home } from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Country from "./pages/country";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/layout/countrydetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,  
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"/country/:id",
        element:<CountryDetails></CountryDetails>
      },
      {
        path: "country",
        element: <Country />
      }
    ]
  }
]);

const App=()=>{
   return(<RouterProvider router={router}></RouterProvider>)
}
export default App;