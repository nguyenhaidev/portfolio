import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "src/pages/Home/Home";
import Layout from "src/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./pages/About";
import { useEffect } from "react";
import Works from "./pages/Works";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/works",
      element: <Works />,
    },
    {
      path: "/works/:id",
      element: <>Work detail</>,
    },
    {
      path: "/contact",
      element: <>Contact</>,
    },

    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blogs",
      element: <>Blogs</>,
    },
    {
      path: "/blogs/:id",
      element: <>Post detail</>,
    },
    {
      path: "*",
      element: <>Not found</>,
    },
  ]);

  return (
    <div className="Apph-screen w-full m-h-screen flex justify-center items-baseline bg-black text-zinc-200 fixed top-0">
      <ChakraProvider>
        <Layout>{elements}</Layout>
      </ChakraProvider>
    </div>
  );
}

export default App;
