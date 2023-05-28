"use-client";
import Image from "next/image";

import { useCountries } from "@/hooks/useCountries";
import { useLeagues } from "@/hooks/useLeagues";
import { CountrySelect } from "@/components/CountrySelect";
import { LeagueSelect } from "@/components/LeagueSelect";
import { useTeams } from "@/hooks/useTeams";

import Cookies from "js-cookie";
import { SeasonSelect } from "@/components/SeasonSelect";

export default function Home() {
  const { countries } = useCountries();
  const {
    countrySelected,
    setCountrySelected,
    leagueByCountry,
    leagueSelect,
    setLeagueSelect,
    seasons,
   
  } = useLeagues();
  const { teams, setSeason, setLeagueId } = useTeams();

  console.log("times: ", teams);
  return (
    <div>
      {countries.length ? (
        <>
          <h1>Meu time</h1>
          <div
            style={{
              display: "flex",
              padding: "0 10em",
              gap: "3em",
            }}
          >
            <CountrySelect
              options={countries}
              onChange={(e) => setCountrySelected(e.name)}
            />

            {countrySelected && (
              <LeagueSelect
                options={leagueByCountry}
                onChange={(e) => {
                  setLeagueSelect(e.league.name);
                  setLeagueId(e.league.id)
                }}
              />
            )}

            {leagueSelect && (
              <SeasonSelect
                options={seasons}
                onChange={(e)=> setSeason(e)}
              />
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
