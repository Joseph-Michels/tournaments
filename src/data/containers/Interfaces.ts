import { EBracketType } from "../enums";
import { IGroupRecordMissing } from "./CGroup";
import { IMatch } from "./CMatch";

export interface ITournament {
    name: string;
    nameShort: string;
    date: string;
    patch: string;
    activeTab: number;
    tabs: ITab[];
}

export interface ITab {
    tabName: string;
    elements: IElement[];
}

export type IElement = IGroupFromMatches | IGroupFromRecords | IBracket;

export interface IGroupFromRecords {
    type: "groupFromRecords";
    gamesAndMatches?: boolean;
    name: string;
    records: IGroupRecordMissing[];
    resultFunction?: (place: number) => string;
}

export interface IGroupFromMatches {
    type: "groupFromMatches";
    gamesAndMatches?: boolean;
    name: string;
    matches: IMatch[];
    resultFunction?: (place: number) => string;
}

export interface IBracket {
    type: "bracket";
    name?: string;
    bracketType: EBracketType;
    matches: IMatch[];
}