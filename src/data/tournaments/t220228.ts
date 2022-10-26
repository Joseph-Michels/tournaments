import { ITournament } from "../containers";
import { EBracketType } from "../enums";

export const t220228: ITournament = {
    name: "JCS 1v1 Tournament #3",
    nameShort: "JCS #3",
    date: "Feb 28 2022",
    patch: "12.4.1",
    activeTab: 0,
    tabs: [
        {
            tabName: "Bracket",
            elements: [
                {
                    type: "bracket",
                    bracketType: EBracketType.DE6,
                    matches: [
                        {
                            "team1": "TsimpleT", "score1": 1, "score2": 2, "team2": "Leen Grantern",
                            "champs1": ["Akali",    "Ryze",     "Graves"],
                            "results": [true,       false,      false],
                            "champs2": ["Sett",     "Gragas",   "Jhin"],
                            "ban2": "Irelia"
                        },
                        {
                            "team1": "Takaharu", "score1": 0, "score2": 2, "team2": "galigod195",
                            "champs1": ["XinZhao",  "Yasuo"],
                            "results": [false,      false],
                            "champs2": ["Ekko",     "Lucian"]
                        },
                        {
                            "team1": "Russell Kingdom", "score1": 1, "score2": 2, "team2": "Leen Grantern",
                            "champs1": ["Orianna",  "Irelia",   "Cassiopeia"],
                            "results": [false,      true,       false],
                            "champs2": ["Aatrox",   "Lucian",   "Sett"]
                        },
                        {
                            "team1": "jamerr102030", "score1": 2, "score2": 1, "team2": "galigod195",
                            "champs1": ["Irelia",   "Neeko",    "Graves"],
                            "results": [true,       false,      true],
                            "champs2": ["Diana",    "Sylas",    "Irelia"]
                        },
                        {
                            "team1": "galigod195", "score1": 2, "score2": 0, "team2": "TsimpleT",
                            "champs1": ["Zoe",      "Zed"],
                            "results": [true,       true],
                            "champs2": ["Neeko",    "Neeko"]
                        },
                        {
                            "team1": "Russell Kingdom", "score1": 1, "score2": 2, "team2": "Takaharu",
                            "champs1": ["Heimerdinger", "Blitzcrank",   "Jayce"],
                            "results": [false,          true,           false],
                            "champs2": ["Samira",       "Kaisa",        "Quinn"]
                        },
                        {
                            "team1": "Leen Grantern", "score1": 2, "score2": 1, "team2": "jamerr102030",
                            "champs1": ["Kled",     "Kalista",  "Swain"],
                            "results": [false,      true,       true],
                            "champs2": ["Warwick",  "Udyr",     "Neeko"]
                        },
                        {
                            "team1": "galigod195", "score1": 1, "score2": 2, "team2": "Takaharu",
                            "champs1": ["Gnar",     "Irelia",   "Tristana"],
                            "results": [true,       false,      false],
                            "champs2": ["Yone",     "Orianna",  "Riven"]
                        },
                        {
                            "team1": "jamerr102030", "score1": 2, "score2": 0, "team2": "Takaharu",
                            "champs1": ["Jax",      "Ornn"],
                            "results": [true,       true],
                            "champs2": ["Camille",  "XinZhao"]
                        },
                        {
                            "team1": "Leen Grantern", "score1": 2, "score2": 1, "team2": "jamerr102030",
                            "champs1": ["Yone",     "Aatrox",   "Aphelios"],
                            "results": [false,      true,       true],
                            "champs2": ["Ziggs",    "Viktor",   "Renekton"]
                        }
                    ]
                }
            ]
        }
    ]
};
