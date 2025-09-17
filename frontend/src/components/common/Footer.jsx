import { Link, NavLink } from "react-router-dom";
import { Email, Facebook, Location, Phone, Whatsapp } from "../../icons/Index";
import Button from "./Button";
import logo from "../../../public/images/logo/taday.png"

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-6">
          {/* start column */}
          <div className="col-span-3">
            <div className="mb-4">
              <NavLink to={"/"}>
                 <img className="w-20" src={logo} alt="logo" />
              </NavLink>
            </div>

            <div>
              <p className="mb-6 text-sm font-normal tracking-wide leading-tight text-text-subtle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                mollitia.
              </p>
            </div>

            <div className="flex items-center justify-start gap-4">
              <a href="#">
              <Facebook className={"size-4 text-text hover:text-primary transition-all"}/>
              </a>
              <a href="#">
              <Whatsapp className={"size-4 text-text hover:text-primary transition-all"}/>
              </a>
            </div>
          </div>
          {/* end column */}
          {/* start column */}
          <div className="col-span-3 ps-4">
            <div className="mb-4">
              <h2 className="text-lg font-medium text-text uppercase">
                Quick Links
              </h2>
            </div>

            <ul>
              <li className="mb-2 text-text-subtle font-normal hover:text-primary">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="mb-2 text-text-subtle font-normal hover:text-primary">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="mb-2 text-text-subtle font-normal hover:text-primary">
                <Link to={"/features"}>Features</Link>
              </li>
              <li className="text-text-subtle font-normal hover:text-primary">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          {/* end column */}
          {/* start column */}
          <div className="col-span-3">
            <div className="mb-4">
              <h2 className="text-lg font-medium text-text uppercase">
                OUR ADDRESS
              </h2>
            </div>

            <div className="mb-2">
              <p className="text-sm text-text-subtle flex items-center">
                <Location className={"size-4 me-2"} /> Usman Ghani G.M Abad
                Faisalabad
              </p>
            </div>

            <div className="mb-2">
              <a
                className="text-sm text-text-subtle flex items-center hover:text-primary"
                href="mailto:"
              >
                <Email className={"size-4 me-2"} /> umairqasim110@gmail.com
              </a>
            </div>
            <div>
              <a
                className="text-sm text-text-subtle flex items-center hover:text-primary"
                href="tel:+9203210881100"
              >
                <Phone className={"size-4 me-2"} /> +923210881100
              </a>
            </div>
          </div>
          {/* end column */}
          {/* start column */}
          <div className="col-span-3">
            <div className="mb-4">
              <h2 className="text-lg font-medium text-text uppercase">
                News Letter
              </h2>
            </div>
            <div>
              <p className="mb-6 text-sm font-normal tracking-wide leading-tight text-text-subtle">
                Subscribe to our newsletter & get all the latest news
              </p>
            </div>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                children={"Subscribe"}
                className={"btn-primary"}
                type={"button"}
              />
            </form>
          </div>
          {/* end column */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
