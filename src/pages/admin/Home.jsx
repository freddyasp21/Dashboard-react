import React from "react";
import CardTicket from "../../components/CardTicket";

function Home() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-white text-2xl font-bold">Wellcome Back, Yvonne Müller</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <CardTicket icon="ticket" mainText="145.000" text="Total Tickets" />
        <CardTicket icon="money" mainText="80.000$" text="Total Earnings" />
        <CardTicket icon="chart" mainText="20.000" text="Total Sales" />
        <CardTicket icon="calendar" mainText="202" text="Total Days of Work" />
      </div>
    </div>
  );
}

export default Home;
