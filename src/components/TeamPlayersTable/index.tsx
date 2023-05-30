import Image from "next/image";

import { ITeamPlayerData } from "@/interfaces/ITeamPlayersData";
import styles from "./styles.module.css";

interface IProps {
  teamPlayers: ITeamPlayerData[] | any[];
}

export const TeamPlayersTable = ({ teamPlayers }: IProps) => {
  return (
    <table className={styles.teamPlayersTable}>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Nacionalidade</th>
        </tr>
      </thead>
      <tbody>
        {teamPlayers.map((player, index) => (
          <tr key={index}>
            <td>
              <Image
                src={player.player.photo}
                width={60}
                height={60}
                alt="Foto do jogador"
                style={{ borderRadius: "50%" }}
              />
            </td>
            <td>{player.player.name}</td>
            <td>{player.player.age}</td>
            <td>{player.player.nationality}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
