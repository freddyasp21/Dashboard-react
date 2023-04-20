import React from "react";
import CardTicket from "../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">
          Wellcome Back, Yvonne Müller
        </h2>
        <div className="flex items-center">
          <RiArrowLeftSLine className="text-2xl p-2 box-content hover:bg-secondary-100 rounded-xl transition-colors hover:text-primary hover:cursor-pointer" />
          <RiArrowRightSLine className="text-2xl text-primary p-2 box-content hover:bg-secondary-100 rounded-xl transition-colors hover:cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <CardTicket icon="ticket" mainText="145.000" text="Total Tickets" />
        <CardTicket icon="money" mainText="80.000$" text="Total Earnings" />
        <CardTicket icon="chart" mainText="20.000" text="Total Sales" />
        <CardTicket icon="calendar" mainText="202" text="Total Days of Work" />
      </div>

      <div className="my-10">
        <h2 className="text-white text-2xl font-bold">Most Recent Tickets</h2>
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          <h5 className="">ID</h5>
          <h5 className="">Description</h5>
          <h5 className="">Status</h5>
          <h5 className="">Date</h5>
          <h5 className="">Actions</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="">
            <span className="">#25</span>
          </div>
          <div className="">
            <p className="">Computer does not turn on</p>
          </div>
          <div className="">
            <span className="py-1 px-2 bg-yellow-500/50 rounded-xl">Open</span>
          </div>
          <div className="">
            <span className="">20/04/2023</span>
          </div>
          <div className="">
            <span className="">
              <Menu
                menuButton={
                  <MenuButton className="py-1 px-2 flex items-center gap-x-2 relative hover:bg-secondary-900 rounded-lg transition-colors ">
                    Actions <RiArrowDownSLine className="text-primary"/>
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
                    Close
                  </Link>
                </MenuItem>
                <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex justify-end">
                  <Link to="/perfil" className="flex items-center gap-x-4">
                    Pending
                  </Link>
                </MenuItem>
                <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex justify-end">
                  <Link to="/perfil" className="flex items-center gap-x-4">
                    In process
                  </Link>
                </MenuItem>
              </Menu>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
