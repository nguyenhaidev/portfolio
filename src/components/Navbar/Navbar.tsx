import { useEffect, memo, useState } from "react";
import DefaultNavbar from "./DefaultNavbar";
import MobileNavbar from "./MobileNavbar";

export interface NavbarItem {
  to: string;
  label: string;
}

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  const navBarItems: NavbarItem[] = [
    {
      to: "/",
      label: "Home",
    },

    {
      to: "/about",
      label: "About",
    },
    {
      to: "/blogs",
      label: "Blogs",
    },
    {
      to: "/works",
      label: "Work",
    },
  ];

  return (
    <>
      {width < 1024 ? (
        <MobileNavbar navbarItems={navBarItems} />
      ) : (
        <DefaultNavbar navbarItems={navBarItems} />
      )}
    </>
  );
}

export default memo(Navbar);
