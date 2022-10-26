import { ITournament } from "../containers";
import { EBracketType } from "../enums";

export const t221024: ITournament = {
    name: "Scrim #2 - Top Lane Edition",
    nameShort: "Scrim #2",
    date: "Oct 24 2022",
    patch: "12.20.1",
    activeTab: 0,
    tabs: [
        {
            tabName: "Bracket",
            elements: [
                {
                    type: "bracket",
                    bracketType: EBracketType.DE4,
                    matches: [
                        {
                            team1: "Takaharu", score1: 1, score2: 2, team2: "TsimpleT",
                            champs1: ["Vayne",  "Fiora",  "Yone"],
                            results: [true,     false,    false],
                            champs2: ["Darius", "Darius", "Volibear"],
                            ban1: "Akali", ban2: "Riven"
                        },
                        {
                            team1: "Neeru", score1: 2, score2: 0, team2: "jamerr102030",
                            champs1: ["Pantheon", "Kled"],
                            results: [true,       true],
                            champs2: ["Udyr",     "Chogath"]
                        },
                        {
                            team1: "TsimpleT", score1: 0, score2: 2, team2: "Neeru",
                            champs1: ["Neeko",  "Akali"],
                            results: [false,    false],
                            champs2: ["Kennen", "Camille"],
                            ban1: "Pantheon", ban2: "Exhaust"
                        },
                        {
                            team1: "Takaharu", score1: 2, score2: 1, team2: "jamerr102030",
                            champs1: ["XinZhao", "Fiora",   "Ornn"],
                            results: [true,      false,     true],
                            champs2: ["Trundle", "DrMundo", "Rumble"]
                        },
                        {
                            team1: "TsimpleT", score1: 0, score2: 2, team2: "Takaharu",
                            champs1: ["Darius",   "Kalista"],
                            results: [false,      false],
                            champs2: ["Pantheon", "XinZhao"],
                            ban1: "Riven", ban2: "Akali"
                        },
                        {
                            team1: "Neeru", score1: 2, score2: 1, team2: "Takaharu",
                            champs1: ["Yasuo",  "Jayce",  "Gragas"],
                            results: [false,    true,     true],
                            champs2: ["Irelia", "LeeSin", "Pantheon"],
                            ban1: "Sett", ban2: "Darius"
                        }
                    ]
                }
            ]
        }
    ]
};
