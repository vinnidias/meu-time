import Image from "next/image";

import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { useCountries } from "@/hooks/useCountries";
import { useLeagues } from "@/hooks/useLeagues";
import { CountrySelect } from "@/components/CountrySelect";
import { LeagueSelect } from "@/components/LeagueSelect";
import { useTeams } from "@/hooks/useTeams";

import { SeasonSelect } from "@/components/SeasonSelect";
import { TeamSelect } from "@/components/TeamSelect";
import { TeamPlayersTable } from "@/components/TeamPlayersTable";
import { Navbar } from "@/components/Navbar";
import styles from "../styles/Home.module.css";
import { GraphicSection } from "@/components/GraphicSection";

export default function Home() {
  const router = useRouter();
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

  return (
    <>
      {countries.length > 0 ? (
        <div>
          <Navbar
            onCLick={() => {
              Cookies.remove("api_key");
              router.push("/login");
            }}
          />
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

          <div className={styles.logoSection}>
            {teams.length > 0 && (
              <>
                <Image
                  src={teamStats.team.logo}
                  alt="Brasão do time"
                  width={80}
                  height={80}
                />{" "}
                <p>{teamStats.team.name}</p>
              </>
            )}
          </div>
          <section className={styles.dataSection}>
            {teamPlayers.length > 0 && (
              <TeamPlayersTable teamPlayers={teamPlayers} />
            )}
            {teams.length > 0 && <GraphicSection teamStatistic={teamStats} />}
          </section>
        </div>
      ) : null}
    </>
  );
}
