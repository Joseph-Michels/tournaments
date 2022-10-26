import { ITournament } from "../containers";
import { EBracketType } from "../enums";

export const t220217: ITournament = {
    name: "JCS 1v1 Tournament #1",
    nameShort: "JCS #1",
    date: "Feb 17 2022",
    patch: "12.4.1",
    activeTab: 1,
    tabs: [
        {
            tabName: "Groups",
            elements: [
                {
                    type: "groupFromMatches",
                    gamesAndMatches: true,
                    name: "Group",
                    matches: [
                        {
                            team1: "jamerr102030", score1: 2, score2: 0, team2: "SpikyBuffalo",
                            champs1: ["Teemo",  "Fizz"],
                            results: [true,     true],
                            champs2: ["LeeSin", "LeeSin"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: 2, score2: 1, team2: "Neo Star",
                            champs1: ["Caitlyn", "Caitlyn", "Draven"],
                            results: [false,     true,      true],
                            champs2: ["Jhin",    "Ezreal",  "Leblanc"]
                        },
                        {
                            team1: "Neo Star", score1: 1, score2: 2, team2: "Takaharu",
                            champs1: ["Caitlyn", "Jhin", "Kalista"],
                            results: [false,     true,   true],
                            champs2: ["Lucian",  "Jhin", "Soraka"]
                        },
                        {
                            team1: "Takaharu", score1: 0, score2: 2, team2: "TsimpleT",
                            champs1: ["Aphelios", "Vayne"],
                            results: [false,      false],
                            champs2: ["Irelia",   "Sylas"]
                        },
                        {
                            team1: "TsimpleT", score1: 1, score2: 2, team2: "jamerr102030",
                            champs1: ["Akali", "XinZhao", "Graves"],
                            results: [true,    false,     false],
                            champs2: ["Akali", "Trundle", "Warwick"]
                        },
                        {
                            team1: "Takaharu", score1: 1, score2: 2, team2: "jamerr102030",
                            champs1: ["Renekton", "Yasuo",    "Leblanc"],
                            results: [false,      true,       false],
                            champs2: ["Olaf",     "MasterYi", "Darius"]
                        },
                        {
                            team1: "TsimpleT", score1: 1, score2: 2, team2: "SpikyBuffalo",
                            champs1: ["Volibear", "Irelia",  "Irelia"],
                            results: [false,      true,      false],
                            champs2: ["Annie",    "Caitlyn", "Soraka"]
                        },
                        {
                            team1: "jamerr102030", score1: 2, score2: 1, team2: "Neo Star",
                            champs1: ["Irelia", "Vayne",   "XinZhao"],
                            results: [true,     false,     true],
                            champs2: ["Ezreal", "Leblanc", "Kalista"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: 0, score2: 2, team2: "Takaharu",
                            champs1: ["LeeSin",  "Soraka"],
                            results: [false,     false],
                            champs2: ["Nidalee", "Irelia"]
                        },
                        {
                            team1: "Neo Star", score1: 1, score2: 2, team2: "TsimpleT",
                            champs1: ["Xayah", "Yasuo",  "Jhin"],
                            results: [true,    false,    false],
                            champs2: ["Akali", "Irelia", "Akali"]
                        }
                    ]
                }
            ]
        },
        {
            tabName: "Bracket",
            elements: [
                {
                    type: "bracket",
                    bracketType: EBracketType.DE4,
                    matches: [
                        {
                            team1: "jamerr102030", score1: 0, score2: 2, team2: "SpikyBuffalo",
                            champs1: ["Viego",   "Yone"],
                            results: [false,     false],
                            champs2: ["Caitlyn", "Lulu"]
                        },
                        {
                            team1: "TsimpleT", score1: 2, score2: 0, team2: "Takaharu",
                            champs1: ["Akali",  "Sylas"],
                            results: [true,     true],
                            champs2: ["LeeSin", "MonkeyKing"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: 2, score2: 1, team2: "TsimpleT",
                            champs1: ["Lulu",    "Caitlyn",     "Lucian"],
                            results: [false,     true,          true],
                            champs2: ["Caitlyn", "MissFortune", "Irelia"]
                        },
                        {
                            team1: "jamerr102030", score1: 0, score2: 2, team2: "Takaharu",
                            champs1: ["RekSai",  "Illaoi"],
                            results: [false,     false],
                            champs2: ["XinZhao", "Garen"]
                        },
                        {
                            team1: "TsimpleT", score1: 0, score2: 2, team2: "Takaharu",
                            champs1: ["Irelia",  "Irelia"],
                            results: [false,     false],
                            champs2: ["Caitlyn", "Riven"]
                        },
                        {
                            team1: "SpikyBuffalo", score1: 2, score2: 0, team2: "Takaharu",
                            champs1: ["Caitlyn",   "Irelia"],
                            results: [true,        true],
                            champs2: ["Seraphine", "XinZhao"]
                        }
                    ]
                }
            ]
        }
    ]
};
