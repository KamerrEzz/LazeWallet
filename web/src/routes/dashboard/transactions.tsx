import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../Components/Layouts/Dashboard";
import { getTransaction } from "../../services/transaction";
import { DateTime } from "luxon";
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
  loader: async () => {
    const inicioMes = DateTime.local(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      1
    )
      .startOf("day")
      .toUTC();
    const finMes = DateTime.local(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      1
    )
      .endOf("month")
      .endOf("day")
      .toUTC();

    const data = await getTransaction(
      "88e54f68-2c87-4d8b-bd7c-1028e9b32428",
      inicioMes.toISO(),
      finMes.toISO()
    );
    return data;
  },
  component: () => {
    const transaction = Route.useLoaderData();

    return (
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
              {transaction.Expeses.map((r, i) => (
                <Col
                  key={i}
                  name={r.description}
                  amount={r.amount}
                  category={r.category?.name ?? "n/a"}
                  date={r.date.split("T")[0]}
                />
              ))}
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
              {transaction.Incomes.map((r, i) => (
                <Col
                  key={i}
                  name={r.description}
                  amount={r.amount}
                  category={r.category?.name ?? "n/a"}
                  date={r.date.split("T")[0]}
                />
              ))}
            </div>
          </section>
        </div>
      </Dashboard>
    );
  },
});
