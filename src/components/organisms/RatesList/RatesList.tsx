import * as s from './RatesList.module.scss'
import React from "react";
import type { Rate } from "@/api/goverla";
import RateItem from "@/components/molecules/RateItem";

// Type
interface Props {
  rates: Rate[];
}

// RatesList
const RatesList: React.FC<Props> = (props) => {
  const { rates } = props

  return (
    <ul>
      {rates.map((rate) => (
        <RateItem key={rate.id} rate={rate} />
      ))}
    </ul>
  )
}

export default RatesList