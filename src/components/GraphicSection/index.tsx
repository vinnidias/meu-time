import { ITeamStats } from "@/interfaces/ITeamStats";
import styles from "./styles.module.css";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useTeams } from "@/hooks/useTeams";

export const GraphicSection = () => {
  const { teamStats, minutesArray } = useTeams();

  return (
    <div className={styles.dataContainer}>
      <div className={styles.infoContainer}>
        <p>
          Formação mais utilizadas: {teamStats.lineups[0].formation}, utilizada
          em {teamStats.lineups[0].played} partidas
        </p>

        <table>
          <thead>
            <tr>
              <th>TOTAL DE JOGOS</th>
              <th>TOTAL DE VITÓRIAS</th>
              <th>TOTAL DE EMPATES</th>
              <th>TOTAL DE EMPATES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{teamStats.fixtures.played.total}</td>
              <td>{teamStats.fixtures.wins.total}</td>
              <td>{teamStats.fixtures.draws.total}</td>
              <td>{teamStats.fixtures.loses.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.graphicContainer}>
        <p>Gols marcados por tempo de jogo</p>
        <BarChart
          width={600}
          height={300}
          margin={{ left: -12 }}
          data={minutesArray}
        >
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="total" type="monotone" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};
