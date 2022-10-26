import { ITournament } from "../containers";
import { EBracketType } from "../enums";

export const t220223: ITournament = {
    name: "JCS 1v1 Tournament #2",
    nameShort: "JCS #2",
    date: "Feb 23 2022",
    patch: "12.4.1",
    activeTab: 1,
    tabs: [
        {
            tabName: "Groups",
            elements: [
                {
                    type: "groupFromMatches",
                    name: "Group A",
                    matches: [
                        {
                            team1: "SpikyBuffalo", score1: 1, score2: 0, team2: "Tzuyu Fanboy", gamesInSet: 1,
                            champs1: ["Caitlyn"], results: [true], champs2: ["Nidalee"]
                        },
                        {
                            team1: "Dragon Stormz", score1: 0, score2: 1, team2: "jamerr102030", gamesInSet: 1,
                            champs1: ["Vi"], results: [false], champs2: ["Neeko"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: 1, score2: 0, team2: "jamerr102030", gamesInSet: 1,
                            champs1: ["Quinn"], results: [true], champs2: ["Darius"]
                        },
                        {
                            team1: "Dragon Stormz", score1: 0, score2: 1, team2: "Tzuyu Fanboy", gamesInSet: 1,
                            champs1: ["Taric"], results: [false], champs2: ["Lissandra"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: 0, score2: 1, team2: "Dragon Stormz", gamesInSet: 1,
                            champs1: ["Quinn"], results: [false], champs2: ["Vi"]
                        },
                        {
                            team1: "jamerr102030", score1: 1, score2: 0, team2: "Tzuyu Fanboy", gamesInSet: 1,
                            champs1: ["Warwick"], results: [true], champs2: ["Renekton"]
                        },
                    ]
                },
                {
                    type: "groupFromMatches",
                    name: "Group B",
                    matches: [
                        {
                            team1: "Takaharu", score1: 1, score2: 0, team2: "TsimpleT", gamesInSet: 1,
                            champs1: ["XinZhao"], results: [true], champs2: ["Akali"]
                        },
                        {
                            team1: "Russell Kingdom", score1: 0, score2: 1, team2: "TheSirDerpton", gamesInSet: 1,
                            champs1: ["Yuumi"], results: [false], champs2: ["Akshan"]
                        },
                        {
                            team1: "Takaharu", score1: 1, score2: 0, team2: "TheSirDerpton", gamesInSet: 1,
                            champs1: ["Riven"], results: [true], champs2: ["Draven"]
                        },
                        {
                            team1: "Russell Kingdom", score1: 1, score2: 0, team2: "TsimpleT", gamesInSet: 1,
                            champs1: ["Cassiopeia"], results: [true], champs2: ["Sylas"]
                        },
                        {
                            team1: "Takaharu", score1: 1, score2: 0, team2: "Russell Kingdom", gamesInSet: 1,
                            champs1: ["Ezreal"], results: [true], champs2: ["Graves"]
                        },
                        {
                            team1: "TheSirDerpton", score1: 1, score2: 0, team2: "TsimpleT", gamesInSet: 1,
                            champs1: ["Zed"], results: [true], champs2: ["Viego"]
                        },
                    ]
                }
            ]
        },
        {
            tabName: "Bracket",
            elements: [
                {
                    type: "bracket",
                    bracketType: EBracketType.DE8,
                    matches: [
                        {
                            team1: "Takaharu", score1: 2, score2: 1, team2: "Dragon Stormz",
                            champs1: ["Irelia", "LeeSin",   "Caitlyn"],
                            results: [true,     false,      true],
                            champs2: ["KogMaw", "Vladimir", "Diana"]
                        },
                        {
                            team1: "jamerr102030", score1: 0, score2: 2, team2: "Russell Kingdom",
                            champs1: ["Malzahar",   "Olaf"],
                            results: [false,        false],
                            champs2: ["Cassiopeia", "Aphelios"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: 2, score2: 0, team2: "TsimpleT",
                            champs1: ["Caitlyn",     "Lucian"],
                            results: [true,          true],
                            champs2: ["MissFortune", "Caitlyn"]
                        },
                        {
                            team1: "TheSirDerpton", score1: 2, score2: 1, team2: "Tzuyu Fanboy",
                            champs1: ["Velkoz", "Yasuo", "Ahri"],
                            results: [true,     false,   true],
                            champs2: ["Lucian", "Lux",   "Lissandra"]
                        },
                        {
                            team1: "Takaharu", score1: 1, score2: 2, team2: "Russell Kingdom",
                            champs1: ["Riven",      "Lucian", "XinZhao"],
                            results: [true,         false,    false],
                            champs2: ["Cassiopeia", "Irelia", "Cassiopeia"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: 0, score2: 2, team2: "TheSirDerpton",
                            champs1: ["Lucian", "Leblanc"],
                            results: [false,    false],
                            champs2: ["Velkoz", "Draven"]
                        },
                        {
                            team1: "Dragon Stormz", score1: 0, score2: 2, team2: "jamerr102030",
                            champs1: ["Kindred", "Akali"],
                            results: [false,     false],
                            champs2: ["Irelia",  "Warwick"]
                        },
                        {
                            team1: "TsimpleT", score1: 2, score2: 1, team2: "Tzuyu Fanboy",
                            champs1: ["Irelia", "Irelia",    "Volibear"],
                            results: [false,    true,        true],
                            champs2: ["Syndra", "Lissandra", "Galio"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: "FF", score2: "W", team2: "jamerr102030"
                        },
                        {
                            team1: "Takaharu", score1: 1, score2: 2, team2: "TsimpleT",
                            champs1: ["Yasuo", "Zed",    "XinZhao"],
                            results: [false,   true,     false],
                            champs2: ["Neeko", "Irelia", "Akali"],
                            ban2: "Riven"
                        },
                        {
                            team1: "Russell Kingdom", score1: 1, score2: 2, team2: "TheSirDerpton",
                            champs1: ["Lucian",  "Zed", "Qiyana"],
                            results: [true,      false, false],
                            champs2: ["Caitlyn", "Zed", "Velkoz"]
                        },
                        {
                            team1: "jamerr102030", score1: 2, score2: 1, team2: "TsimpleT",
                            champs1: ["Irelia", "XinZhao", "Graves"],
                            results: [true,     false,     true],
                            champs2: ["Sylas",  "Neeko",   "Sylas"],
                            ban1: "Akali"
                        },
                        {
                            team1: "Russell Kingdom", score1: 2, score2: 1, team2: "jamerr102030",
                            champs1: ["Ryze",    "LeeSin", "Orianna"],
                            results: [false,     true,     true],
                            champs2: ["Warwick", "Graves", "Viktor"]
                        },
                        {
                            team1: "TheSirDerpton", score1: 0, score2: 2, team2: "Russell Kingdom",
                            champs1: ["Velkoz",  "Yasuo"],
                            results: [false,     false],
                            champs2: ["Orianna", "Velkoz"]
                        },
                        {
                            team1: "TheSirDerpton", score1: 2, score2: 1, team2: "Russell Kingdom",
                            champs1: ["Akshan", "Syndra", "Velkoz"],
                            results: [false,    true,     true],
                            champs2: ["Ahri",   "Lux",    "Lulu"]
                        }
                    ]
                }
            ]
        }
    ]
};
