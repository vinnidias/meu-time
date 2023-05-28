import { getTeams } from "@/services/getTeams";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useTeams = () => {
  const [teams, setTeams] = useState<any[]>([]);
  const [season, setSeason] = useState(0);
  const [leagueId, setLeagueId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const apiKey = Cookies.get("api_key") || "";
    if (!apiKey) {
      router.push("/login");
    }
    (async () => {
      try {
        const { data } = await getTeams(apiKey, leagueId, season);
        const teams = data.response;
        setTeams(teams);
        console.log("TIMES", teams);
      } catch (error) {
        console.log("teams req fail: ", error);
      }
    })();
  }, [router, leagueId, season]);

  return { teams, setSeason, setLeagueId };
};
