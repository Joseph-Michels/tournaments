import { CMatch } from "./CMatch";
import { IGroupFromMatches, IGroupFromRecords } from "./Interfaces";

export class CGroup {
    public standings: IGroupRecord[];
    public matches: CMatch[];
    public resultFunction: (place: number) => string;

    constructor(group: IGroupFromRecords | IGroupFromMatches) {
        this.standings = [];
        if(group.type === "groupFromMatches") {
            this.matches = [];
            let teams: {[key: string]: boolean} = {};
            for(let match of group.matches) {
                if(match.team1 && !(match.team1 in teams)) {
                    teams[match.team1] = true;
                    this.standings.push({
                        team: match.team1,
                        wins: 0, losses: 0,
                        gameWins: 0, gameLosses: 0,
                        streakCount: 0, streakType: ""
                    });
                }
                if(match.team2 && !(match.team2 in teams)) {
                    teams[match.team2] = true;
                    this.standings.push({
                        team: match.team2,
                        wins: 0, losses: 0,
                        gameWins: 0, gameLosses: 0,
                        streakCount: 0, streakType: ""
                    });
                }
                const cmatch = new CMatch(match);
                this.matches.push(cmatch);
                this.reportMatchScore(cmatch, group.gamesAndMatches);
            }
            this.resultFunction = (group.resultFunction) ? group.resultFunction : () => "";
        } else {
            // "groupFromRecords"
            for(let record of group.records) {
                this.standings.push({
                    team: record.team,
                    wins: record.wins,
                    losses: record.losses,
                    gameWins: (record.gameWins) ? record.gameWins : record.wins,
                    gameLosses: (record.gameLosses) ? record.gameLosses : record.losses,
                    streakCount: record.streakCount,
                    streakType: record.streakType
                });
            }
            this.matches = [];
            this.resultFunction = (group.resultFunction) ? group.resultFunction : () => "";
        }
    }

    getTeams(): string[] {
        return this.standings.map((record) => record.team);
    }

    reportMatchScore(match: CMatch, gamesAndMatches?: boolean): boolean {
        if(!match.isOver()) {
            return false;
        }
        const [winningTeam, losingTeam]: [string, string] = match.getWinningLosingTeams();
        const [winningScore, losingScore]: [number, number] = match.getWinningLosingScores();

        let [winningStanding, iWinning] = this.findTeamIGroupStanding(winningTeam);
        if(gamesAndMatches) {
            winningStanding.wins++;
        } else {
            winningStanding.wins += winningScore;
            winningStanding.losses += losingScore;
        }
        
        winningStanding.gameWins += winningScore;
        winningStanding.gameLosses += losingScore;
        
        if(winningStanding.streakType === "W") {
            winningStanding.streakCount++;
        } else {
            winningStanding.streakCount = 1;
            winningStanding.streakType = "W";
        }
        let matchPlusMinus = winningStanding.wins - winningStanding.losses;
        while(iWinning >= 1) {
            let aboveStanding = this.standings[iWinning-1];
            const aboveMatchPlusMinus = aboveStanding.wins - aboveStanding.losses;
            if(aboveMatchPlusMinus > matchPlusMinus) {
                break;
            } else if(aboveMatchPlusMinus === matchPlusMinus) {
                const gamePlusMinus = winningStanding.gameWins - winningStanding.gameLosses;
                const aboveGamePlusMinus = aboveStanding.gameWins - aboveStanding.gameLosses;
                if(aboveGamePlusMinus > gamePlusMinus) {
                    break;
                } else if(aboveGamePlusMinus === gamePlusMinus) {
                    let shouldStopGoingUp = false;
                    for(let iterMatch of this.matches) {
                        if(iterMatch.containsTeams(winningTeam, aboveStanding.team)) {
                            // lost tiebreaker
                            if(iterMatch.getWinningLosingTeams()[0] !== winningTeam)  {
                                shouldStopGoingUp = true;
                            }
                            break;
                        }
                    }
                    if(shouldStopGoingUp) {
                        break;
                    }
                }
            }
            [this.standings[iWinning-1], this.standings[iWinning]]
                = [this.standings[iWinning], this.standings[iWinning-1]];
            iWinning--;
        }

        let [losingStanding, iLosing] = this.findTeamIGroupStanding(losingTeam);
        if(gamesAndMatches) {
            losingStanding.losses++;
        } else {
            losingStanding.wins += losingScore;
            losingStanding.losses += winningScore;
        }
        losingStanding.gameWins += losingScore;
        losingStanding.gameLosses += winningScore;
        if(losingStanding.streakType === "L") {
            losingStanding.streakCount++;
        } else {
            losingStanding.streakCount = 1;
            losingStanding.streakType = "L";
        }
        matchPlusMinus = losingStanding.wins - losingStanding.losses;
        while(iLosing < this.standings.length-1) {
            let belowStanding = this.standings[iLosing+1];
            const belowMatchPlusMinus = belowStanding.wins - belowStanding.losses;
            if(belowMatchPlusMinus < matchPlusMinus) {
                break;
            } else if(belowMatchPlusMinus === matchPlusMinus) {
                const gamePlusMinus = losingStanding.gameWins - losingStanding.gameLosses;
                const belowGamePlusMinus = belowStanding.gameWins - belowStanding.gameLosses;
                if(belowGamePlusMinus < gamePlusMinus) {
                    break;
                } else if(belowGamePlusMinus === gamePlusMinus) {
                    let shouldStopGoingDown = false;
                    for(let iterMatch of this.matches) {
                        if(iterMatch.containsTeams(losingTeam, belowStanding.team)) {
                            // won tiebreaker
                            if(iterMatch.getWinningLosingTeams()[0] === losingTeam)  {
                                shouldStopGoingDown = true;
                            }
                            break;
                        }
                    }
                    if(shouldStopGoingDown) {
                        break;
                    }
                }
            }
            [this.standings[iLosing+1], this.standings[iLosing]]
                = [this.standings[iLosing], this.standings[iLosing+1]];
            iLosing++;
        }

        return true;
    }

    findTeamIGroupStanding(team: string): [IGroupRecord, number] {
        for(let i = 0; i < this.standings.length; i++) {
            if(team === this.standings[i].team) {
                return [this.standings[i], i];
            }
        }
        console.error(team);
        throw Error("TEAM NOT IN GROUP");
    }

    static regionalRegularSeasonResults(place: number): string {
        return (place <= 2)
            ? "qualifiedUpperUpper"
            : (place <= 6)
                ? "qualifiedUpper"
                : (place <= 10)
                    ? "qualifiedLower"
                    : "noQual";
    }

    static msiGroupsResults(place: number): string {
        return (place <= 4)
            ? "qualifiedUpperUpper"
            : "noQual";
    }
}

export interface IGroupRecord {
    team: string;
    wins: number;
    losses: number;
    gameWins: number;
    gameLosses: number;
    streakCount: number;
    streakType: "W" | "L" | "";
}

export interface IGroupRecordMissing {
    team: string;
    wins: number;
    losses: number;
    gameWins?: number;
    gameLosses?: number;
    streakCount: number;
    streakType: "W" | "L" | "";
}
