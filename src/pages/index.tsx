import Image from "next/image";

import { useCountries } from "@/hooks/useCountries";
import { useLeagues } from "@/hooks/useLeagues";
import { CountrySelect } from "@/components/CountrySelect";
import { LeagueSelect } from "@/components/LeagueSelect";
import { useTeams } from "@/hooks/useTeams";

import Cookies from "js-cookie";

export default function Home() {
  const { countries } = useCountries();
  const {
    countrySelected,
    setCountrySelected,
    leagueByCountry,
    leagueSelect,
    setLeagueSelect,
  } = useLeagues();
  const { teams } = useTeams();
  const apiKey = Cookies.get("api_key");

  return (
    <>
      {!apiKey && null}
      {apiKey && (
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
                onChange={(e) => setLeagueSelect(e.league.name)}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}
