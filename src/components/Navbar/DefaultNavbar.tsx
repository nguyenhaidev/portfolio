import { useDisclosure } from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { joinClass } from "src/services";
import { AppProps } from "src/types";
import { NavbarItem } from "./Navbar";

export interface DefaultNavbarProps extends AppProps {
  navbarItems: NavbarItem[];
}

export default function DefaultNavbar(props: DefaultNavbarProps) {
  const { pathname } = useLocation();
  const { isOpen } = useDisclosure();
  const { navbarItems } = props;

  const renderNavbarItems = navbarItems.map((e, idx) => (
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
    <nav
      className={joinClass([
        "flex justify-between items-stretch w-full px-0 fixed top-0 bg-black z-10 px-3",
        // !isOpen && pathname !== "/" && "opacity-30 hover:opacity-100",
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
  );
}
