import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../Components/Layouts/Dashboard";
import { Card } from "../../Components/ui/Card";

export const Route = createFileRoute("/dashboard/categories")({
  component: () => (
    <Dashboard>
      <div className="max-w-6xl m-auto py-4 flex flex-col gap-4">
        <section className="flex items-center justify-end">
          <button className="rounded-md px-4 py-2 bg-wisteria-300 hover:bg-wisteria-600 text-black hover:text-neutral-200 font-bold">
            Agregar
          </button>
        </section>
        <section className="grid grid-cols-5 gap-4">
          <Card>
            <h1 className="flex items-center justify-between font-bold border-b pb-2">
              Casa <span className="font-extralight">gasto</span>
            </h1>
            <p className="text-center text-4xl font-bold">Total 30k</p>
          </Card>
        </section>
      </div>
    </Dashboard>
  ),
});
