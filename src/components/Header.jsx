import { useState } from "react";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-amber-400 p-4 mx-auto ">
      <div className="container mx-auto flex items-center justify-between ">
        <a href="#home" className="hover:opacity-75 transition-opacity">
          <img src={logo} alt="logo" width={200} className="w-36 md:w-64" />
        </a>

        <button onClick={toggle} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>

        <ul className={`absolute flex md:hidden flex-col  top-12 p-5 
                      gap-10 left-0 right-0 text-center py-16   
                       shadow-lg z-50 h-[42vh]  ${open ? "flex": "hidden" }`}
        >
          <li >
            <a href="" className="hover:text-gray-700 transition-all">Home</a>
          </li>
          <li >
            <a href="" className="hover:text-gray-700 transition-all">Contact</a>
          </li>
          <li >
            <a href="" className="hover:text-gray-700 transition-all">Sing In</a>
          </li>
          <li >
            <a href="" className="hover:text-gray-700 transition-all">Sing Up</a>
          </li>
        </ul>

        <ul className=" md:flex hidden items-center gap-6 mr-4 font-Rubik font-normal text-[1.1rem] ">
          <li className="">
            <a href="" className="hover:text-gray-700 transition-all">Home</a>
          </li>
          <li>
            <a href="" className="hover:text-gray-700 transition-all">Contact</a>
          </li>
          <li>
            <a href="" className=" hover:text-gray-700 transition-all">Sing In</a>
          </li>
          <li>
            <a href="" className="hover:text-gray-700 transition-all">Sing Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
