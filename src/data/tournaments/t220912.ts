import { ITournament } from "../containers";
import { EBracketType } from "../enums";

export const t220912: ITournament = {
    name: "Scrim #1",
    nameShort: "Scrim #1",
    date: "Sep 12 2022",
    patch: "12.17.1",
    activeTab: 0,
    tabs: [
        {
            tabName: "Scrim",
            elements: [
                {
                    type: "groupFromMatches",
                    name: "Group",
                    matches: [
                        {
                            team1: "jamerr102030", score1: 2, score2: 0, team2: "Takaharu", gamesInSet: 2,
                            champs1: ["Akali",  "Chogath"],
                            results: [true,     true],
                            champs2: ["Qiyana", "Yasuo"]
                        },
                        {
                            team1: "Takaharu", score1: 2, score2: 0, team2: "TsimpleT", gamesInSet: 2,
                            champs1: ["Yone",    "Sylas"],
                            results: [true,      true],
                            champs2: ["XinZhao", "Neeko"]
                        },
                        {
                            team1: "TsimpleT", score1: 1, score2: 1, team2: "jamerr102030", gamesInSet: 2,
                            champs1: ["Akali",   "Lucian"],
                            results: [false,     true],
                            champs2: ["Belveth", "Gwen"]
                        },
                    ]
                },
                {
                    type: "bracket",
                    bracketType: EBracketType.SE3,
                    matches: [
                        {
                            "team1": "Takaharu", "score1": 0, "score2": 2, "team2": "TsimpleT",
                            "champs1": ["Renekton", "Lucian"],
                            "results": [false,      false],
                            "champs2": ["Akali",    "Lux"],
                            "ban2": "Riven"
                        },
                        {
                            "team1": "jamerr102030", "score1": 1, "score2": 2, "team2": "TsimpleT",
                            "champs1": ["Sett",     "Jinx",     "Malzahar"],
                            "results": [true,       false,      false],
                            "champs2": ["Sylas",    "Quinn",    "Syndra"],
                            "ban1": "Akali"
                        }
                    ]
                }
            ]
        }
    ]
};
