export interface IMatch {
    team1?: string;
    team2?: string;
    score1?: number | string;
    score2?: number | string;
    gamesInSet?: number;
    champs1?: string[];
    results?: boolean[];
    champs2?: string[];
    ban1?: string;
    ban2?: string;
}

export class CMatch {
    public team1?: string;
    public team2?: string;
    private score1: number | string;
    private score2: number | string;
    private gamesInSet: number = 3; // default is bo3 if undefined
    private champs1: string[];
    private results: boolean[];
    private champs2: string[];
    public ban1?: string;
    public ban2?: string;

    private gamesToWin;

    constructor(match: IMatch) {
        this.team1 = match.team1;
        this.team2 = match.team2;
        this.score1 = (match.score1 !== undefined) ? match.score1 : "";
        this.score2 = (match.score2 !== undefined) ? match.score2 : "";
        if(match.gamesInSet !== undefined) {
            this.gamesInSet = match.gamesInSet;
        }
        this.champs1 = match.champs1 ? match.champs1 : [];
        this.results = match.results ? match.results : [];
        this.champs2 = match.champs2 ? match.champs2 : [];
        this.ban1 = match.ban1;
        this.ban2 = match.ban2;
        
        this.gamesToWin = (this.gamesInSet+1)/2;
    }

    public getScore1(): string {
        return `${this.score1}`;
    }

    public getScore2(): string {
        return `${this.score2}`;
    }

    public getGamesInSet(): number {
        return this.gamesInSet;
    }

    public getChamps1(): string[] {
        return [...this.champs1];
    }

    public getResults(): boolean[] {
        return [...this.results];
    }

    public getResultsInverted(): boolean[] {
        let resultsInverted = [];
        for(let result of this.results) {
            resultsInverted.push(!result);
        }
        return resultsInverted;
    }

    public getChamps2(): string[] {
        return [...this.champs2];
    }

    public isStarted(): boolean {
        if(this.score1 === "" || this.score2 === "") {
            return false;
        }
        const score1 = Number(this.score1), score2 = Number(this.score2);
        return isNaN(score1) || isNaN(score2) || score1 + score2 > 0;
    }

    public isOver(): boolean {
        return this.team1 !== undefined && this.team2 !== undefined
            && (this.score1 >= this.gamesToWin || this.score2 >= this.gamesToWin || Number(this.score1)+Number(this.score2) >= this.gamesInSet);
    }

    // MATCH MUST BE OVER OR ERROR
    public getWinningLosingTeams(): [string, string] {
        const winningTeamNumber: number = this.getWinner();
        if(this.team1 === undefined || this.team2 === undefined) {
            throw Error("CMatch.getWinningLosingTeams teams don't exist");
        }
        return (winningTeamNumber === 1) ? [this.team1, this.team2] : [this.team2, this.team1];
    }

    public getWinningLosingScores(): [number, number] {
        const winningTeamNumber: number = this.getWinner();
        if(this.team1 === undefined || this.team2 === undefined) {
            throw Error("CMatch.getWinningLosingTeams teams don't exist");
        }
        const score1 = Number(this.score1), score2 = Number(this.score2);
        return (winningTeamNumber === 1) ? [score1, score2] : [score2, score1];
    }
    
    // 1 or 2; 0 means something is wrong or match isn't over
    public getWinner(): number {
        return (this.score1 < this.gamesToWin && this.score2 < this.gamesToWin)
                    ? 0
                    : this.score1 >= this.gamesToWin
                        ? 1
                        : 2;
    }

    public getTeam(team1: boolean): string {
        if(team1 && this.team1) {
            return this.team1;
        }
        if(this.team2) {
            return this.team2;
        }
        throw Error(`CMatch.getWinnerTeam: team undefined ${this}`);
    }

    public containsTeams(team1: string, team2: string) {
        return (team1 === this.team1 && team2 === this.team2) || (team2 === this.team1 && team1 === this.team2);
    }

    public toString(): string {
        return `[${this.team1} (${this.score1}-${this.score2}) ${this.team2}]`;
    }
}
