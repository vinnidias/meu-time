export interface ITeamStats {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  form: string;
  fixtures: {
    played: {
      home: number;
      away: number;
      total: number;
    };
    wins: {
      home: number;
      away: number;
      total: number;
    };
    draws: {
      home: number;
      away: number;
      total: number;
    };
    loses: {
      home: number;
      away: number;
      total: number;
    };
  };
  goals: {
    for: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      minute: {
        "0-15": {
          total: number | null;
          percentage: string | null;
        };
        "16-30": {
          total: number | null;
          percentage: string | null;
        };
        "31-45": {
          total: number | null;
          percentage: string | null;
        };
        "46-60": {
          total: number | null;
          percentage: string | null;
        };
        "61-75": {
          total: number | null;
          percentage: string | null;
        };
        "76-90": {
          total: number | null;
          percentage: string | null;
        };
        "91-105": {
          total: number | null;
          percentage: number | null;
        };
        "106-120": {
          total: number | null;
          percentage: number | null;
        };
      };
    };
    against: {
      total: {
        home: number | null;
        away: number | null;
        total: number | null;
      };
      average: {
        home: string | null;
        away: string | null;
        total: string | null;
      };
      minute: {
        "0-15": {
          total: number | null | string;
          percentage: number | null | string;
        };
        "16-30": {
          total: number | null;
          percentage: string | null;
        };
        "31-45": {
          total: number | null;
          percentage: string | null;
        };
        "46-60": {
          total: number | null;
          percentage: string | null;
        };
        "61-75": {
          total: number | null;
          percentage: string | null;
        };
        "76-90": {
          total: number | null;
          percentage: string | null;
        };
        "91-105": {
          total: number | null;
          percentage: string | null;
        };
        "106-120": {
          total: number | null;
          percentage: string | null;
        };
      };
    };
  };
  biggest: {
    streak: {
      wins: number | null;
      draws: number | null;
      loses: number | null;
    };
    wins: {
      home: string | null;
      away: string | null;
    };
    loses: {
      home: number | null | string;
      away: number | null | string;
    };
    goals: {
      for: {
        home: number | null;
        away: number | null;
      };
      against: {
        home: number | null;
        away: number | null;
      };
    };
  };
  clean_sheet: {
    home: number | null;
    away: number | null;
    total: number | null;
  };
  failed_to_score: {
    home: number | null;
    away: number | null;
    total: number | null;
  };
  penalty: {
    scored: {
      total: number | null;
      percentage: string | null;
    };
    missed: {
      total: number | null;
      percentage: string | null;
    };
    total: number | null;
  };
  lineups: {
    formation: string | null;
    played: number | null;
  }[];
  cards: {
    yellow: {
      "0-15": {
        total: number | null;
        percentage: string | null;
      };
      "16-30": {
        total: number | null;
        percentage: string | null;
      };
      "31-45": {
        total: number | null;
        percentage: string | null;
      };
      "46-60": {
        total: number | null;
        percentage: string | null;
      };
      "61-75": {
        total: number | null;
        percentage: string | null;
      };
      "76-90": {
        total: number | null;
        percentage: string | null;
      };
      "91-105": {
        total: number | null;
        percentage: string | null;
      };
      "106-120": {
        total: number | null;
        percentage: string | null;
      };
      "": {
        total: number | null;
        percentage: string | null;
      };
    };
    red: {
      "0-15": {
        total: number | null;
        percentage: string | null;
      };
      "16-30": {
        total: number | null;
        percentage: string | null;
      };
      "31-45": {
        total: number | null;
        percentage: string | null;
      };
      "46-60": {
        total: number | null;
        percentage: string | null;
      };
      "61-75": {
        total: number | null;
        percentage: string | null;
      };
      "76-90": {
        total: number | null;
        percentage: string | null;
      };
      "91-105": {
        total: number | null;
        percentage: string | null;
      };
      "106-120": {
        total: number | null;
        percentage: string | null;
      };
    };
  };
}
