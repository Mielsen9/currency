import React from "react";
import { useRates } from "@/hook/useRates";
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
        <div className={s.MainContainer}>
          <section className={s.HeaderContainer}>
            <Header />
          </section>
          <section className={s.ContentContainer}>
            {point && <RatesList point={point} />}
            {point && <CurrencyCalculator rates={point?.rates} />}
          </section>
          <section className={s.FooterContainer}>
            <Footer/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RatesPage;