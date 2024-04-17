import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../Components/Layouts/Dashboard";
import { Card } from "../../Components/ui/Card";

const Home = () => {
  return (
    <Dashboard>
      <div className="max-w-6xl m-auto py-4 flex flex-col gap-4">
        <section className="grid grid-cols-4 gap-4">
          <Card>
            <h1 className="font-thin">Ingresos</h1>
            <p className="font-bold text-center text-6xl">30K</p>
          </Card>
          <Card>
            <h1 className="font-thin">Gastos</h1>
            <p className="font-bold text-center text-6xl">30K</p>
          </Card>
          <Card>
            <h1 className="font-thin">Total</h1>
            <p className="font-bold text-center text-6xl">30K</p>
          </Card>
          <Card>
            <h1 className="font-thin">Meta</h1>
            <p className="font-bold text-center text-6xl">14/50</p>
          </Card>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <Card>
            <h1 className="font-thin">Total de tus ingresos (mensual)</h1>
            <p className="font-bold text-center text-6xl">30K</p>
          </Card>
          <Card>
            <h1 className="font-thin">Total de tus gatos (mensual)</h1>
            <p className="font-bold text-center text-6xl">30K</p>
          </Card>
        </section>
      </div>
    </Dashboard>
  );
};

export const Route = createFileRoute("/dashboard/home")({
  component: Home,
});
