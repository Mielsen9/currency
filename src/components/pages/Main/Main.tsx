import * as s from './Main.module.scss'
import React, {useEffect, useState} from "react";

// Type
interface Props {

}
interface CurrencyRate {
  currencyCodeA: number;
  currencyCodeB: number;
  rateBuy?: number;
  rateSell?: number;
  rateCross?: number;
}

const currencyMap: { [key: string]: number } = {
  USD: 840,
  EUR: 978,
  GBP: 826,
  PLN: 985,
};

// Main
const Main: React.FC<Props> = (props) => {
  // const {} = props
  //
  // return (
  //   <div className={s.Main}>
  //     {/*<h1>Курс валют</h1>*/}
  //     {/*<h2>Для клієнтів -</h2>*/}
  //     {/*<h2>Для менеджера -</h2>*/}
  //
  //   </div>
  // )
  const [minRate, setMinRate] = useState<number | null>(null);
  const [maxRate, setMaxRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "EUR" | "GBP" | "PLN">("USD");
  const [error, setError] = useState<string | null>(null);

  const fetchRates = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.monobank.ua/bank/currency");
      const data: any = await res.json();

      if (!Array.isArray(data)) {
        setError("Помилка API або перевищено ліміт запитів (429)");
        return;
      }

      const code = currencyMap[currency];
      const filtered = data.filter(
        (item: CurrencyRate) => item.currencyCodeA === code && item.currencyCodeB === 980
      );

      if (filtered.length > 0) {
        const rates = filtered
          .map((item) => {
            if (item.rateBuy && item.rateSell) return [item.rateBuy, item.rateSell];
            if (item.rateCross) return [item.rateCross];
            return [];
          })
          .flat();

        setMinRate(Math.min(...rates));
        setMaxRate(Math.max(...rates));
      } else {
        setMinRate(null);
        setMaxRate(null);
        setError("Дані не знайдено для цієї валюти");
      }
    } catch (err) {
      console.error("Помилка при завантаженні:", err);
      setError("Помилка при завантаженні даних");
    } finally {
      setLoading(false);
    }
  };

  // Не викликаємо useEffect автоматично, щоб не спамити API
  // useEffect(() => { fetchRates(); }, [currency]);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Курс {currency} у Monobank</h2>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as any)}
        style={{ marginBottom: "10px" }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="PLN">PLN</option>
      </select>

      <br />

      <button onClick={fetchRates} disabled={loading}>
        {loading ? "Завантаження..." : "Оновити курс"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {minRate !== null && maxRate !== null && !error && (
        <div>
          <p>Найнижчий курс: <b>{minRate}</b></p>
          <p>Найвищий курс: <b>{maxRate}</b></p>
        </div>
      )}
    </div>
  );
}

export default Main