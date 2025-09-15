import {useGetRatesQuery} from "@/api/goverla";
import {Point} from "@/types";

export const useRates = () => {
  const { data, error, isLoading } = useGetRatesQuery();

  return {
    point: data as Point | undefined,
    isLoading,
    error,
  };
};