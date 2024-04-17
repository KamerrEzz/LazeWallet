import React from "react";
import { Link } from "@tanstack/react-router";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="h-13 p-3 border-b flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Link className="[&.active]:text-wisteria-300 text-wisteria-600" to="/dashboard/home">Home</Link>
          <Link className="[&.active]:text-wisteria-300 text-wisteria-600" to="/dashboard/transactions">Transacciones</Link>
          <Link className="[&.active]:text-wisteria-300 text-wisteria-600" to="/dashboard/categories">Categorias</Link>
          {/* <Link className="[&.active]:text-wisteria-300 text-wisteria-600" to="/dashboard/goals">Metas</Link> */}
        </div>
        <div>
            <Link>Logout</Link>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
