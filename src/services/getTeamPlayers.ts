import { ITeamPlayerData } from "@/interfaces/ITeamPlayersData";
import { api } from "./api";

export const getTeamPlayers = async (
  apiKey: string,
  teamId: number,
  season: number,
  leagueId: number
): Promise<{
  data: ITeamPlayerData[];
  status: number;
  errors: { token?: string; requests?: string };
}> => {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  };

  const res = await api.get(
    `/players?team=${teamId}&season=${season}&league=${leagueId}`,
    config
  );
  const data = res.data.response;
  const status = res.data.status;
  const errors = res.data.errors;

  return { data, status, errors };
};
