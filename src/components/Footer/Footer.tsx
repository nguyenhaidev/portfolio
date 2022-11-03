import React from "react";
import PropTypes from "prop-types";
import { AppProps } from "src/types";
import { joinClass } from "src/services";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export interface FooterProps extends AppProps {}

function Footer(props: FooterProps) {
  return (
    <div
      id="footer"
      {...props}
      className={joinClass([
        props.className,
        "mt-[6rem] mb-3 flex flex-col w-full justify-center items-center",
      ])}
    >
      <div className="uppercase mb-3">find me on</div>
      <div className="flex gap-3  text-2xl">
        <a
          href="https://www.linkedin.com/in/trong-hai-nguyen-7271471b0/"
          className="hover:text-cyan-500"
        >
          <i className="fa-brands fa-linkedin" />
        </a>
        <a
          href="https://github.com/nguyenhaidev"
          className="hover:text-cyan-500"
        >
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="mailto:nguyenhai.k17@gmail.com"
          className="hover:text-cyan-500"
        >
          <i className="fa-solid fa-at" />
        </a>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
