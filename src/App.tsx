import { Routes, Route, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "src/pages/Home";
import Layout from "src/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./pages/About";

function App() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/work",
      element: <>Work</>,
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
    <div className="Apph-screen w-full m-h-screen flex justify-center items-baseline bg-black text-zinc-200">
      <ChakraProvider>
        <Layout>{elements}</Layout>
      </ChakraProvider>
    </div>
  );
}

export default App;
