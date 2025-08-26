import { useGetRatesQuery } from "@/api/goverla";
import type { Rate } from "@/api/goverla";

export const useRates = () => {
  const { data, error, isLoading } = useGetRatesQuery();

  return {
    rates: data as Rate[] | undefined,
    isLoading,
    error,
  };
};