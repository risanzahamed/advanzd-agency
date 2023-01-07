import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Landing from "../Landing";
import Job from "../Pages/Job/Job";
import OurCompany from "../Pages/OurCompany/OurCompany";
import OurExperts from "../Pages/OurExperts/OurExperts";
import PricingPlans from "../Pages/PricingPlans/PricingPlans";
import Root from "./Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/our-company",
          element: <OurCompany/>,
        },
        {
          path: "/our-experts",
          element: <OurExperts />,
        },
        {
          path: "/pricing-plans",
          element: <PricingPlans />,
        },
        {
          path: "/jobs",
          element: <Job />,
        },
  
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ],
    },
  

  ]);
  
  export default router