import React from "react";
import { useRates } from "@/features/rates/hook/useRates";
import RatesList from "@/components/organisms/RatesList";
import * as s from "./RatesPage.module.scss";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const RatesPage: React.FC = () => {
  const { rates, isLoading, error } = useRates();

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка при отриманні даних</p>;

  return (
    <div className={s.Main}>
      <Header />
      <h2>Курси валют</h2>
      {rates && <RatesList rates={rates} />}
      <Footer/>
    </div>
  );
};

export default RatesPage;