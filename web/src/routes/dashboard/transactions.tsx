import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../Components/Layouts/Dashboard";
// import transaction from "../../utils/mocks/transactions.json";

const Col = (props: {
  name: string;
  amount: number;
  category: string;
  date: string;
}) => {
  return (
    <div className="grid grid-cols-4 p-1 border-b border-white/20 place-items-center">
      <p className="flex-1 text-center">{props.name}</p>
      <p className="flex-1 text-center">{props.amount}</p>
      <p className="flex-1 text-center">{props.category}</p>
      <p className="flex-1 text-center">{props.date}</p>
    </div>
  );
};

export const Route = createFileRoute("/dashboard/transactions")({
  component: () => (
    <Dashboard>
      <div className="max-w-6xl m-auto py-4 flex flex-col gap-4">
        <section className="flex items-center justify-end">
          <button className="rounded-md px-4 py-2 bg-wisteria-300 hover:bg-wisteria-600 text-black hover:text-neutral-200 font-bold">
            Agregar
          </button>
        </section>
        <section className="bg-wisteria-200/30 rounded-md overflow-hidden">
          <div className="grid grid-cols-4 bg-wisteria-900 p-1 font-thin text-white/50 text-sm">
            <p className="flex-1 text-center">Nombre</p>
            <p className="flex-1 text-center">Cantidad</p>
            <p className="flex-1 text-center">Categoria</p>
            <p className="flex-1 text-center">Fecha</p>
          </div>
          <div className="flex flex-col">
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
          </div>
        </section>
        <section className="bg-wisteria-200/30 rounded-md overflow-hidden">
          <div className="grid grid-cols-4 bg-wisteria-900 p-1 font-thin text-white/50 text-sm">
            <p className="flex-1 text-center">Nombre</p>
            <p className="flex-1 text-center">Cantidad</p>
            <p className="flex-1 text-center">Categoria</p>
            <p className="flex-1 text-center">Fecha</p>
          </div>
          <div className="flex flex-col">
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
            <Col name="casa" amount={20.4} category="casa" date="20-03-2024" />
          </div>
        </section>
      </div>
    </Dashboard>
  ),
});
