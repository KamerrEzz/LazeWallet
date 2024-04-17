import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../Components/Layouts/Dashboard";
import { Card } from "../../Components/ui/Card";

const Home = () => {
  return (
    <Dashboard>
      <div className="max-w-6xl m-auto py-4 flex flex-col gap-4">
        <section className="grid grid-cols-4 gap-4">
          <Card>
            <h1 className="font-thin">Total Ingresos</h1>
            <p className="font-bold text-center text-6xl">30K</p>
          </Card>
          <Card>
            <h1 className="font-thin">Total Gastos</h1>
            <p className="font-bold text-center text-6xl">30K</p>
          </Card>
          <Card>
            <h1 className="font-thin">Total Neto</h1>
            <p className="font-bold text-center text-6xl">30K</p>
          </Card>
          <Card>
            <h1 className="font-thin">Meta</h1>
            <p className="font-bold text-center text-6xl">14/50</p>
          </Card>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <Card>
            <h1 className="font-thin">Ingresos actual</h1>
            <p className="font-bold text-center text-6xl">12</p>
          </Card>
          <Card>
            <h1 className="font-thin">Gastos actual</h1>
            <p className="font-bold text-center text-6xl">35</p>
          </Card>
        </section>
        <section className="bg-wisteria-200/30 rounded-md overflow-hidden">
          <div className="grid grid-cols-5 bg-wisteria-900 p-1 font-thin text-white/50 text-sm">
            <p className="flex-1 text-center">Nombre</p>
            <p className="flex-1 text-center">Cantidad</p>
            <p className="flex-1 text-center">Categoria</p>
            <p className="flex-1 text-center">Fecha</p>
            <p className="flex-1 text-center">typo</p>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-5 p-1 border-b border-white/20 place-items-center">
              <p className="flex-1 text-center">Helado</p>
              <p className="flex-1 text-center">305.40</p>
              <p className="flex-1 text-center">General</p>
              <p className="flex-1 text-center">04-04-2024</p>
              <p className="flex-1 text-center bg-pink-500/50 rounded-md py-1 px-2 w-fit font-bold">gasto</p>
            </div>
            <div className="grid grid-cols-5 p-1 border-b border-white/20 place-items-center">
              <p className="flex-1 text-center">hennus</p>
              <p className="flex-1 text-center">305.40</p>
              <p className="flex-1 text-center">hakos</p>
              <p className="flex-1 text-center">04-04-2024</p>
              <p className="flex-1 text-center bg-green-500/50 rounded-md py-1 px-2 w-fit font-bold">Ingreso</p>
            </div>
          </div>
        </section>
      </div>
    </Dashboard>
  );
};

export const Route = createFileRoute("/dashboard/home")({
  component: Home,
});
