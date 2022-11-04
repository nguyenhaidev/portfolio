import React from "react";
import { AppProps } from "src/types";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

interface LayoutProps extends AppProps {}

const Layout = (props: LayoutProps) => {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-start max-w-screen-2xl font-mono">
      <Navbar />
      <div className="w-full grow flex justify-center">{props.children}</div>
      <Footer className="w-full max-w-3xl" />
    </div>
  );
};

export default Layout;
