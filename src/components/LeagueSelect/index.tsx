import { useState } from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import { ILeagueData } from "@/interfaces/ILeagueData";

interface IProps {
  options: ILeagueData[];
  onChange: (league: ILeagueData) => void;
}

export const LeagueSelect = ({ options, onChange }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [onFocus, setOnFocus] = useState({
    flag: "",
    name: "",
  });
  return (
    <div
      className={styles.leagueContainer}
      onClick={() => setIsVisible(!isVisible)}
    >
      <span>
        {onFocus.name ? (
          <>
            <Image
              src={onFocus.flag}
              alt="bandeira do país"
              width={25}
              height={25}
            />
            {onFocus.name}
          </>
        ) : (
          <>Selecione a Liga</>
        )}
      </span>
      {isVisible && (
        <li>
          {options.map((league, index) => (
            <ul
              key={index}
              onClick={() => {
                onChange(league);
                setOnFocus({
                  flag: league.league.logo,
                  name: league.league.name,
                });
              }}
            >
              {league.league.logo && (
                <Image
                  src={league.league.logo}
                  alt="bandeira do país"
                  width={25}
                  height={25}
                />
              )}{" "}
              <span>{league.league.name}</span>
            </ul>
          ))}
        </li>
      )}
    </div>
  );
};
