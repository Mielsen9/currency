import React from "react";
import { useRates } from "@/features/rates/hook/useRates";
import RatesList from "@/components/organisms/RatesList";
import * as s from "./RatesPage.module.scss";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import CurrencyCalculator from "@/components/organisms/CurrencyCalculator";

const RatesPage: React.FC = () => {
  const { point, isLoading, error } = useRates();

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка при отриманні даних</p>;

  return (
    <div className={s.Main}>
      <div className={s.wrapper}>
        <Header />
        <section className={s.RatesContainer}>
          {point && <RatesList point={point} />}
          <CurrencyCalculator/>
        </section>
        <Footer/>
      </div>
    </div>
  );
};

export default RatesPage;