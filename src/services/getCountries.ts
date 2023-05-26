import { ICountriesProps } from "@/interfaces/ICountriesProps";
import { api } from "./api";

export const getCountries = async (
  apiKey: string
): Promise<{
  data: ICountriesProps[];
  status: number;
  errors: { token?: string; requests?: string };
}> => {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  };
  const res = await api.get("/countries", config);
  const data = res.data.response;
  const errors = res.data.errors;
  const status = res.data.status;

  return { data, errors, status };
};
