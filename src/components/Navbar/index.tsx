import { useState } from "react";
import Logo from "../Logo";
import { Drawer } from "antd";
import {
  UserIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Container from "../Container";
import config from "@/config";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
  {
    label: "Services",
    link: "#",
  },
  {
    label: "Telemedicine",
    link: "#",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 flex justify-end p-2 ">
        <div className=" flex space-x-2">
          <EnvelopeIcon className="size-6" />
          <div>info@gho.care</div>
        </div>
      </div>
      <nav className="bg-primary sticky top-0 z-50">
        <Container className="p-3 flex justify-between items-center py-2">
          <div>
            <Link to="/">
              <Logo className="h-20" />
            </Link>
          </div>
          <div className="space-x-4 hidden lg:flex">
            {navItems.map((item) => (
              <div className="text-white text-md font-medium cursor-pointer">
                <Link to={item.link}>{item.label}</Link>
              </div>
            ))}
          </div>

          <div className="flex space-x-8 items-center">
            <MagnifyingGlassIcon
              color="white"
              className="size-6 cursor-pointer hidden lg:block"
            />
            <Bars3Icon
              color="white"
              className="size-8 cursor-pointer lg:hidden"
              onClick={() => setMenuOpen(true)}
            />
            <a href={`${config.navigation.portal}`}>
              <UserIcon
                color="white"
                className="size-6 cursor-pointer hidden lg:block"
              />
            </a>
          </div>
        </Container>

        <Drawer
          open={menuOpen}
          placement="left"
          onClose={() => setMenuOpen(false)}
          closeIcon={<XMarkIcon />}
          title={<Logo className="h-[60px]" />}
          rootClassName="lg:hidden"
        >
          <div className="">
            {navItems.map((item) => (
              <div className="text-primary text-md font-medium cursor-pointer p-2 flex justify-between items-center my-2 border">
                <Link to={item.link}>{item.label}</Link>
                <ArrowRightIcon className="h-6" />
              </div>
            ))}
            <button className="w-full bg-primary text-white p-3 ">
              Get Second Opinion
            </button>
          </div>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
