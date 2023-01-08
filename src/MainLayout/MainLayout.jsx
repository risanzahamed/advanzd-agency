import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Landing from "../Landing";
import Job from "../Pages/Job/Job";
import SingleJobPost from "../Pages/Job/SingleJobPost";
import SinglePostJobDeatails from "../Pages/Job/SinglePostJobDeatails";
import OurCompany from "../Pages/OurCompany/OurCompany";
import OurExperts from "../Pages/OurExperts/OurExperts";
import PricingPlans from "../Pages/PricingPlans/PricingPlans";
import PrivateRoute from "../Router/PrivateRoute";
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
          element: <PrivateRoute><Job /></PrivateRoute>,
        },
        
        {
          path: "/jobs/:id",
          element: <PrivateRoute><SingleJobPost></SingleJobPost></PrivateRoute>,
          loader: ({ params }) => fetch(`https://advanzd-agency-server.vercel.app/job-details/${params.id}`)
  
        },
        {
          path: `/job/:id`,
          element: <PrivateRoute><SinglePostJobDeatails></SinglePostJobDeatails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://advanzd-agency-server.vercel.app/post/${params.id}`)
  
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