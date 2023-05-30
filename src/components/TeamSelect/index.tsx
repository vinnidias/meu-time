import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { ITeamData } from "@/interfaces/ITeamData";

interface IProps {
  options: ITeamData[];
  onChange: (team: ITeamData) => void;
}

export const TeamSelect = ({ options, onChange }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [onFocus, setOnFocus] = useState({
    id: 0,
    name: "",
    code: "",
    country: "",
    founded: 0,
    national: false,
    logo: "",
  });
  return (
    <div
      className={styles.teamContainer}
      onClick={() => setIsVisible(!isVisible)}
    >
      <span className={styles.onFocus}>
        {onFocus.name ? (
          <>
            <Image
              src={onFocus.logo}
              alt="logo do time"
              width={25}
              height={25}
            />{" "}
            {onFocus.name}
          </>
        ) : (
          <span>Selecione o Time</span>
        )}
      </span>
      {isVisible && (
        <li>
          {options.map((team, index) => (
            <ul
              key={index}
              onClick={() => {
                setOnFocus(team.team);
                onChange(team);
              }}
            >
              {" "}
              <Image
                src={team.team.logo}
                alt="logo do time"
                width={25}
                height={25}
              />{" "}
              {team.team.name}
            </ul>
          ))}
        </li>
      )}
    </div>
  );
};
