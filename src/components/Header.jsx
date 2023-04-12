import React from "react";
import { RiNotification2Line, RiArrowDownSLine, RiSettings3Line, RiMessage3Line, RiMoneyDollarCircleLine, RiWalletLine, RiLoginCircleLine, } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center">
        <button className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
          <RiNotification2Line className="text-white" />
          <span className="absolute -top-0.5 right-0 py-0.5 px-[5px] box-content text-black bg-primary rounded-full text-[8px] font-bold">
            2
          </span>
        </button>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 relative hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
              <img
                src="https://img.freepik.com/foto-gratis/concepto-emociones-personas-foto-cabeza-hombre-guapo-aspecto-serio-barba-confiado-decidido_1258-26730.jpg"
                alt=""
                className="w-6 h-6 object-cover rounded-full"
              />
              <span className="flex items-center gap-2">
                Jorge Luis Trejo <RiArrowDownSLine className="text-primary" />
              </span>
            </MenuButton>
          }
          transition
          menuClassName="bg-secondary-100 text-white p-4"
        >
          {" "}
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 mb-2">
            <Link to="/perfil" className="flex items-center gap-x-4">
              <img
                src="https://img.freepik.com/foto-gratis/concepto-emociones-personas-foto-cabeza-hombre-guapo-aspecto-serio-barba-confiado-decidido_1258-26730.jpg"
                alt=""
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="flex items-center gap-2 text-sm">
                  Jorge Luis Trejo
                </span>
                <span className="flex items-center gap-2 text-xs text-gray-500">
                  jorge@gmail.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 mb-2">
            <Link to="/configuracion" className="flex items-center gap-2"><RiSettings3Line className="text-primary"/> Configuración</Link>
          </MenuItem>
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 mb-2">
            <Link to="/mensajes" className="flex items-center gap-2"><RiMessage3Line className="text-primary"/> Mensajes</Link>
          </MenuItem>
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 mb-2">
            <Link to="/ganancias" className="flex items-center gap-2"><RiMoneyDollarCircleLine  className="text-primary"/> Ganancias</Link>
          </MenuItem>
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 mb-2">
            <Link to="/wallet" className="flex items-center gap-2"><RiWalletLine  className="text-primary"/> Wallet</Link>
          </MenuItem>
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 mb-2">
            <Link to="/logout" className="flex items-center gap-2"><RiLoginCircleLine  className="text-primary"/> Cerrar sesión</Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
}

export default Header;
