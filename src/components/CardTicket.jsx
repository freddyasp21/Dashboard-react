import React from "react";
import {
  RiTicketLine,
  RiMore2Line,
  RiMoneyDollarCircleLine,
  RiBarChart2Line,
  RiCalendarLine,
  RiAddLine
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

function CardTickets(props) {
  const { icon, mainText, text } = props;

  let status = "";
  let infoDropDown = [];
  let buttonCard = "";

  switch (icon) {
    case "ticket":
      status = (
        <RiTicketLine className="text-4xl bg-pink-500/10 text-pink-500 p-2 box-content rounded-xl" />
      );
      infoDropDown = ["Show all Tickets", "Information", "Pending Tickets"];
      buttonCard = "Add New Ticket";
      break;

    case "money":
      status = (
        <RiMoneyDollarCircleLine className="text-4xl bg-yellow-500/10 text-yellow-500 p-2 box-content rounded-xl" />
      );
      infoDropDown = [
        "Show all Earnings",
        "Earnings of the Month",
        "Earnings of the Day",
      ];
      buttonCard = "Add New Earning";
      break;

    case "chart":
      status = (
        <RiBarChart2Line className="text-4xl bg-blue-500/10 text-blue-500 p-2 box-content rounded-xl" />
      );
      infoDropDown = [
        "Show all Sales",
        "Sales of the Month",
        "Sales of the Day",
      ];
      buttonCard = "Add New Sales";
      break;

    case "calendar":
      status = (
        <RiCalendarLine className="text-4xl bg-primary/10 text-primary p-2 box-content rounded-xl" />
      );
      infoDropDown = ["Free days", "Weekends", "Workdays"];
      buttonCard = "Add New Event";
      break;

    default:
      break;
  }

  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="">{status}</div>
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
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex justify-end">
              <Link to="/perfil" className="flex items-center gap-x-4">
                {infoDropDown[0]}
              </Link>
            </MenuItem>
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex justify-end">
              <Link to="/perfil" className="flex items-center gap-x-4">
                {infoDropDown[1]}
              </Link>
            </MenuItem>
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex justify-end">
              <Link to="/perfil" className="flex items-center gap-x-4">
                {infoDropDown[2]}
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* Number of Tickets */}
      <div className="mb-4">
        <h3 className="text-4xl text-white font-bold mb-4">{mainText}</h3>
        <p className="">{text}</p>
      </div>
      {/*  */}
      <div className="flex items-center">
        <Link
          to="/"
          className="flex items-center gap-1 text-black font-medium bg-primary hover:bg-primary/90 transition-colors py-1 px-4 rounded-xl"
        >
          <RiAddLine/>{buttonCard}
        </Link>
      </div>
    </div>
  );
}

export default CardTickets;
