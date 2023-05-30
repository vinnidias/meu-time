import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { ISeasonData } from "@/interfaces/ISeasonData";

interface IProps {
  options: ISeasonData[];
  onChange: (year: number) => void;
}

export const SeasonSelect = ({ options, onChange }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [onFocus, setOnFocus] = useState(0);

  return (
    <div
      className={styles.seasonContainer}
      onClick={() => setIsVisible(!isVisible)}
    >
      <span className={styles.onFocus}>
        {onFocus > 0 ? (
          <>
            <span>{onFocus}</span>
          </>
        ) : (
          <p>Selecione a Temporada</p>
        )}
      </span>
      {isVisible && (
        <li>
          {options.sort((a,b)=> b.year - a.year).map((season, index) => (
            <ul
              key={index}
              onClick={() => {
                onChange(season.year);
                setOnFocus(season.year);
              }}
            >
              <span>{season.year}</span>
            </ul>
          ))}
        </li>
      )}
    </div>
  );
};
