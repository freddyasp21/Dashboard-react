import React from "react";
import CardTicket from '../../components/CardTicket'

function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <CardTicket ticket="total" totalTickets="145.000" text="Total tickets"/>
      </div>
    </div>
  );
}

export default Home;
