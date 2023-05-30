// export interface ITeamPlayerData {
//   player: {
//     id: number;
//     name: string;
//     firstname: string;
//     lastname: string;
//     age: number;
//     birth: {
//       date: string;
//       place: string;
//       country: string;
//     };
//     nationality: string;
//     height: string;
//     weight: string;
//     injured: boolean;
//     photo: string;
//   };
//   statistics: {
//     team: {
//       id: number;
//       name: string;
//       logo: string;
//     };
//     league: {
//       id: number;
//       name: string;
//       country: string;
//       logo: string;
//       flag: string;
//       season: number;
//     };
//     games: {
//       appearences: number;
//       lineups: number;
//       minutes: number;
//       number: number | null;
//       position: string;
//       rating: string | number | null;
//       captain: boolean;
//     };
//     substitutes: {
//       in: number;
//       out: number;
//       bench: number;
//     };
//     shots: {
//       total: number | null | string;
//       on: number | null | string;
//     };
//     goals: {
//       total: number;
//       conceded: number | null | string;
//       assists: number | null | string;
//       saves: number | null | string;
//     };
//     passes: {
//       total: number | null | string;
//       key: number | null | string;
//       accuracy: number | null | string;
//     };
//     tackles: {
//       total: number | null | string;
//       blocks: number | null | string;
//       interceptions: number | null | string;
//     };
//     duels: {
//       total: number | null | string;
//       won: number | null | string;
//     };
//     dribbles: {
//       attempts: number | null | string;
//       success: number | null | string;
//       past: number | null | string;
//     };
//     fouls: {
//       drawn: number | null | string;
//       committed: number | null | string;
//     };
//     cards: {
//       yellow: number;
//       yellowred: number;
//       red: number;
//     };
//     penalty: {
//       won: number | null | string;
//       commited: number | null | string;
//       scored: number | null | string;
//       missed: number | null | string;
//       saved: number | null | string;
//     };
//   }[];
// }

export interface ITeamPlayerData {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string;
      place: string;
      country: string;
    };
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  };
  statistics: any[];
}
