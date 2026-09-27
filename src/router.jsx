import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/blog";
import MainLayout from "./layout/MainLayout";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blog",
                element: <Blog />
            },
             {
                path: "/Shop",
                element: <Shop />
            },
              {
                path: "/Faq",
                element: <Faq />
            }
        ]
    }
]);

export default router