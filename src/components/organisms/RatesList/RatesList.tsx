import * as s from './RatesList.module.scss'
import React from "react";
import RateItem from "@/components/molecules/RateItem";
import RateCaption from "@/components/molecules/RateCaption";
import RateHeader from "@/components/molecules/RateHeader";
import {Point} from "@/types";

// Type
interface Props {
  point: Point;
}

// RatesList
const RatesList: React.FC<Props> = (props) => {
  const { point } = props

  return (
    <div className={s.RatesList}>
      <RateCaption point={point} />
      <RateHeader/>
      <ul>
        {point.rates.map((rate) => (
          <RateItem key={rate.id} rate={rate} />
        ))}
      </ul>
    </div>
  )
}

export default RatesList