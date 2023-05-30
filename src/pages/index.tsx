import Image from "next/image";

import { useCountries } from "@/hooks/useCountries";
import { useLeagues } from "@/hooks/useLeagues";
import { CountrySelect } from "@/components/CountrySelect";
import { LeagueSelect } from "@/components/LeagueSelect";
import { useTeams } from "@/hooks/useTeams";

import styles from "../styles/Home.module.css";
import { SeasonSelect } from "@/components/SeasonSelect";
import { TeamSelect } from "@/components/TeamSelect";
import { TeamPlayersTable } from "@/components/TeamPlayersTable";

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
  const {
    teams,
    seasonSelected,
    setSeasonSelected,
    setLeagueId,
    setTeamSelected,
    teamStats,
    teamPlayers,
  } = useTeams();

  console.log("times: ", teams);
  return (
    <>
      {countries.length > 0 ? (
        <div className={styles.mainContainer}>
          <h1>Meu time</h1>
          <div className={styles.selectorBar}>
            <CountrySelect
              options={countries}
              onChange={(e) => setCountrySelected(e.name)}
            />

            {countrySelected && (
              <LeagueSelect
                options={leagueByCountry}
                onChange={(e) => {
                  setLeagueSelect(e.league.name);
                  setLeagueId(e.league.id);
                }}
              />
            )}

            {leagueSelect && (
              <SeasonSelect
                options={seasons}
                onChange={(e) => setSeasonSelected(e)}
              />
            )}
            {seasonSelected ? (
              <TeamSelect
                options={teams}
                onChange={(team) => setTeamSelected(team.team)}
              />
            ) : null}
          </div>

          <section className={styles.dataSection}>
            <TeamPlayersTable teamPlayers={teamPlayers} />
          </section>
        </div>
      ) : null}
    </>
  );
}
