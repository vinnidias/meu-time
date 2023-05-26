import Image from "next/image";
import { ChangeEvent, useState } from "react";
import styles from "./styles.module.css";
import { ICountriesProps } from "@/interfaces/ICountriesProps";

interface IProps {
  options: ICountriesProps[];
  onChange: (country: ICountriesProps) => void;
}

export const CountrySelect = ({ options, onChange }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [onFocus, setOnFocus] = useState({
    flag: "",
    name: "",
  });
  return (
    <div
      className={styles.countryContainer}
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
          <>Selecione o país</>
        )}
      </span>
      {isVisible && (
        <li>
          {options.map((country, index) => (
            <ul
              key={index}
              onClick={() => {
                onChange(country);
                setOnFocus({ flag: country.flag, name: country.name });
              }}
            >
              {country.flag && (
                <Image
                  src={country.flag}
                  alt="bandeira do país"
                  width={25}
                  height={25}
                />
              )}{" "}
              <span>{country.name}</span>
            </ul>
          ))}
        </li>
      )}
    </div>
  );
};
