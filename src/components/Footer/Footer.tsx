import { AppProps } from "src/types";
import { joinClass } from "src/services";

export interface FooterProps extends AppProps {}

function Footer(props: FooterProps) {
  return (
    <div
      id="footer"
      {...props}
      className={joinClass([
        props.className,
        "fixed sticky bottom-0 left-0 py-3 flex flex-col w-screen justify-center items-center bg-black",
      ])}
    >
      <div className="uppercase mb-3">find me on</div>
      <div className="flex gap-3 text-2xl">
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
