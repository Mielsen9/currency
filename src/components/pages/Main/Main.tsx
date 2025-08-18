import * as s from './Main.module.scss'
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGoverlaRates } from "@/api/goverla";

// Type
interface Props {
}

// Main
const Main: React.FC<Props> = (props) => {
  const { data: rates, isLoading, isError } = useQuery({
    queryKey: ["goverlaRates"],
    queryFn: fetchGoverlaRates,
    refetchInterval: 60000, // автооновлення раз на хвилину
  });

  if (isLoading) return <p>Завантаження...</p>;
  if (isError) return <p>Помилка при отриманні даних</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Курси валют Goverla</h2>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
        <tr>
          <th className="border px-4 py-2">Валюта</th>
          <th className="border px-4 py-2">Купівля</th>
          <th className="border px-4 py-2">Продаж</th>
          <th className="border px-4 py-2">Оновлено</th>
        </tr>
        </thead>
        <tbody>
        {rates?.map((rate) => (
          <tr key={rate.id}>
            <td className="border px-4 py-2">
              {rate.currency.codeAlpha} ({rate.currency.name})
            </td>
            <td className="border px-4 py-2">{rate.bid.absolute}</td>
            <td className="border px-4 py-2">{rate.ask.absolute}</td>
            <td className="border px-4 py-2">
              {new Date(rate.bid.updatedAt).toLocaleString("uk-UA")}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Main