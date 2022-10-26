import { ITournament } from "../containers";
import { EBracketType } from "../enums";

export const t221127: ITournament = {
    name: "Neerbeer Championship Series",
    nameShort: "NCS",
    date: "Nov 27 2022",
    patch: "12.22.1",
    activeTab: 0,
    tabs: [
        {
            tabName: "Bracket",
            elements: [
                {
                    type: "bracket",
                    bracketType: EBracketType.DE8,
                    matches: [
                        {
                            team1: "Somesort"
                        },
                        {
                            team1: "Takaharu", team2: "TsimpleT"
                        },
                        {
                            team1: "Neeru1", team2: "jamerr102030"
                        },
                        {
                            team1: "Russell Kingdom", team2: "TheSirDerpton"
                        }
                    ]
                }
            ]
        }
    ]
};
