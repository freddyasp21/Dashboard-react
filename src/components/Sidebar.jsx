import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiBarChart2Fill,
  RiEarthLine,
  RiCustomerService2Line,
  RiCalendar2Line,
  RiLoginCircleLine,
  RiArrowDownSLine,
  RiSettings3Line,
  RiMenuFill,
  RiCloseLine
} from "react-icons/ri";

function Sidebar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0": "-left-full"} transition-all`}>
        <div className="">
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin<span className="text-primary text-4xl">.</span>
          </h1>
          <ul className="">
            <li className="">
              {" "}
              <Link
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                to="/"
              >
                <RiBarChart2Fill className="text-primary" /> Análiticas
              </Link>
            </li>
            <li className="">
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors w-full"
              >
                <span className="flex items-center gap-4">
                  {" "}
                  <RiEarthLine className="text-primary" /> Redes sociales
                </span>
                <RiArrowDownSLine
                  className={`mt-1 ${
                    showSubmenu && "rotate-180"
                  } transition-all`}
                />
              </button>
              <ul className={`my-2 ${!showSubmenu && "hidden"}`}>
                <li className="">
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 text-white hover:text-white transition-colors"
                  >
                    Post
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Stadistic
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Profile
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Followers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              {" "}
              <Link
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                to="/tickets"
              >
                <RiCustomerService2Line className="text-primary" /> Soporte Técnico
              </Link>
            </li>
            <li className="">
              {" "}
              <Link
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                to="/"
              >
                <RiCalendar2Line className="text-primary" /> Calendario
              </Link>
            </li>
            <li className="">
              {" "}
              <Link
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                to="/"
              >
                <RiSettings3Line className="text-primary" /> Configuración
              </Link>
            </li>
          </ul>
        </div>
        <nav className="">
          <Link
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            to="/"
          >
            <RiLoginCircleLine className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>

      <button onClick={() => setShowMenu(!showMenu)} className="fixed bottom-4 right-4 text-black bg-primary p-3 rounded-full z-50 xl:hidden">
        {showMenu ? <RiCloseLine/> : <RiMenuFill/>}
        </button>
    </>
  );
}

export default Sidebar;
