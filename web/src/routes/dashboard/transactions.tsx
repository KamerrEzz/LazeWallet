import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../Components/Layouts/Dashboard";

export const Route = createFileRoute("/dashboard/transactions")({
  component: () => (
    <Dashboard>
      <div className="max-w-6xl m-auto py-4 flex flex-col gap-4">Transacciones</div>
    </Dashboard>
  ),
});
