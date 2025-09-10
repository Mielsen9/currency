import {Point, useGetRatesQuery} from "@/api/goverla";

export const useRates = () => {
  const { data, error, isLoading } = useGetRatesQuery();

  return {
    point: data as Point | undefined,
    isLoading,
    error,
  };
};