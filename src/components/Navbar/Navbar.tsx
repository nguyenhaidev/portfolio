import React, { useCallback, useEffect, useState, memo, Fragment } from "react";
import { AppProps } from "src/types";
import { joinClass } from "src/services";
import { Button, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { spawn } from "child_process";

export interface NavbarProps extends AppProps {}

function Navbar(props: NavbarProps) {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const { pathname } = useLocation();

  const scrollHandler = useCallback(() => {
    onToggle();
    if (window.pageYOffset === 0) {
      onToggle();
    } else {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.addEventListener("scroll", scrollHandler);
    onOpen();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navBarItems = [
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
      to: "/work",
      label: "Work",
    },
  ];

  const renderNavbarItems = navBarItems.map((e, idx) => (
    <NavLink className="py-3" key={idx} to={e.to} end>
      {({ isActive }) => {
        const activeClass = isActive && "bg-cyan h-[5px] bg-cyan-400";
        return (
          <span className="px-3 pt-2 pb-4 duration-200 min-w-[100px] text-center relative font-semibold">
            {e.label}
            <div
              className={`absolute bottom-0 w-full duration-300 ${activeClass} left-0`}
            ></div>
          </span>
        );
      }}
    </NavLink>
  ));

  return (
    <>
      <nav
        className={joinClass([
          "md:flex hidden justify-between items-stretch w-full px-0 sticky top-0 bg-black pt-3 z-10",
          !isOpen && pathname !== "/" && "opacity-30 hover:opacity-100",
        ])}
      >
        <Link
          to="/"
          className={joinClass([
            "flex items-center gap-2 justify-center duration-300",
            isOpen ? "text-4xl pt-3" : "text-2xl",
          ])}
        >
          <i className="fa-solid fa-code" />{" "}
          <span className="text-cyan-500">Gossling</span>
        </Link>
        <div className="flex items-end flex-col duration-300 h-full">
          <div className="flex gap-3 items-baseline">
            {renderNavbarItems}
            <Link
              className="py-3 px-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm shadow-lg active:shadow-cyan-500/50"
              to="/contact"
            >
              Get in touch!
            </Link>
          </div>
        </div>
      </nav>
      <div className="md:hidden flex">small</div>
    </>
  );
}

export default memo(Navbar);
