import { getTeams } from "@/services/getTeams";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getStatistics } from "@/services/getStatistics";
import { getTeamPlayers } from "@/services/getTeamPlayers";
import { ITeamStats } from "@/interfaces/ITeamStats";
import { ITeamPlayerData } from "@/interfaces/ITeamPlayersData";

import { ITeamData } from "@/interfaces/ITeamData";

interface ITeamSelected {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

export const useTeams = () => {
  const [teams, setTeams] = useState<ITeamData[]>([]);
  const [seasonSelected, setSeasonSelected] = useState(0);
  const [leagueId, setLeagueId] = useState(0);
  const [teamSelected, setTeamSelected] = useState({} as ITeamSelected);
  const [teamStats, setTeamStats] = useState({} as ITeamStats);
  const [teamPlayers, setTeamPlayers] = useState<ITeamPlayerData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const apiKey = Cookies.get("api_key") || "";
    if (!apiKey) {
      router.push("/login");
    }
    (async () => {
      try {
        const { data } = await getTeams(apiKey, leagueId, seasonSelected);
        setTeams(data);
      } catch (error) {
        console.log("teams req fail: ", error);
      }
    })();
  }, [router, leagueId, seasonSelected]);

  useEffect(() => {
    const apiKey = Cookies.get("api_key") || "";
    if (!apiKey) {
      router.push("/login");
    }
    (async () => {
      try {
        const { data } = await getStatistics(
          apiKey,
          leagueId,
          seasonSelected,
          teamSelected.id
        );
        setTeamStats(data);
        const { data: playersData } = await getTeamPlayers(
          apiKey,
          teamSelected.id,
          seasonSelected,
          leagueId
        );
        setTeamPlayers(playersData);
      } catch (error) {
        console.log("team req fail: ", error);
      }
    })();
  }, [leagueId, teamSelected, seasonSelected, router]);

  return {
    teams,
    seasonSelected,
    setSeasonSelected,
    setLeagueId,
    teamSelected,
    setTeamSelected,
    teamStats,
    teamPlayers,
  };
};
