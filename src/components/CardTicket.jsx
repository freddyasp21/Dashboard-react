import React from "react";
import { RiTicketLine, RiMore2Line } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

function CardTickets(props) {
  const { ticket, totalTickets, text } = props;

  let status = "";

  switch (ticket) {
    case "pending":
      status = "bg-yellow-500/10 text-yellow-500";
      break;

    case "inProcess":
      status = "bg-blue-500/10 text-blue-500";
      break;

    case "inProcess":
      status = "bg-green-500/10 text-green-500";
      break;

    case "total":
      status = "bg-pink-500/10 text-pink-500";
      break;

    default:
      break;
  }

  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="">
          <RiTicketLine
            className={`text-4xl ${status} p-2 box-content rounded-xl`}
          />
        </div>
        <div className="">
          <Menu
            menuButton={
              <MenuButton className="flex items-center gap-x-2 relative hover:bg-secondary-900 py-4 px-4 rounded-lg transition-colors ">
                <RiMore2Line />
              </MenuButton>
            }
            transition
            arrow={true}
            arrowClassName="bg-secondary-100"
            align="end"
            menuClassName="bg-secondary-100 text-white p-2"
          >
            {" "}
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900">
              <Link to="/perfil" className="flex items-center gap-x-4">
                Show all Tickets
              </Link>
            </MenuItem>
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex justify-end">
              <Link to="/perfil" className="flex items-center gap-x-4">
                Information
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* Number of Tickets */}
      <div className="">
        <h3 className="text-4xl text-white font-bold mb-4">{totalTickets}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

export default CardTickets;
