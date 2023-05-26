export interface ILeagueResponseData {
  errors: [] | { token: string };
  paging: { current: number; total: number };
  get: string;
  parameters: any[];
  response: {
    league: {
      id: number;
      name: string;
      type: string;
      logo: string;
    };
    country: {
      name: string;
      code: string | null;
      flag: string | null;
    };
    seasons: {
      year: number;
      start: string;
      end: string;
      current: boolean;
      coverage: {
        fixtures: {
          events: boolean;
          lineups: boolean;
          statistics_fixtures: boolean;
          statistics_players: boolean;
        };
        standings: boolean;
        players: boolean;
        top_scorers: boolean;
        top_assists: boolean;
        top_cards: boolean;
        injuries: boolean;
        predictions: boolean;
        odds: boolean;
      };
    }[];
  }[];
  result: number;
}
