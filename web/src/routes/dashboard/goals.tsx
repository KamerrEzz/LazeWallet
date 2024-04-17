import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../Components/Layouts/Dashboard";

export const Route = createFileRoute("/dashboard/goals")({
  component: () => (
    <Dashboard>
      <div className="max-w-6xl m-auto py-4 flex flex-col gap-4">
        <section className="flex items-center justify-end">
          <button className="rounded-md px-4 py-2 bg-wisteria-300 hover:bg-wisteria-600 text-black hover:text-neutral-200 font-bold">
            Agregar
          </button>
        </section>
      </div>
    </Dashboard>
  ),
});
