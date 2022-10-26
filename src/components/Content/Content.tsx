import React from "react";

import { CBracket, CGroup, Constants, EBracketType, IElement, ITab, ITournament } from "../../data";
import { VBracketDE4, VBracketDE6, VBracketDE8, VBracketSE3 } from "../VBracket";
import { VGroup } from "../VGroup";
import styles from "./Content.module.css";

interface IProps {}

interface IState {
    tournamentIdx: number;
    tab: number;
}

const BRACKET_TYPES: {[type in EBracketType]: any} = {
    [EBracketType.DE8]: VBracketDE8,
    [EBracketType.DE4]: VBracketDE4,
    [EBracketType.DE6]: VBracketDE6,
    [EBracketType.SE3]: VBracketSE3
}

/*
https://medium.com/geekculture/github-pages-with-dynamic-routes-40f512900efa
https://www.reddit.com/r/reactjs/comments/gpj45d/how_to_handle_routes_in_github_pages/
https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
*/

export class Content extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const path: string = window.location.pathname;
        let idx: number = 1;
        if(path.startsWith("/tournaments/")) {
            const numberString = path.substring(path.indexOf("/", 1)+1);
            const num = (numberString === "") ? NaN : Number(numberString);
            if(!isNaN(num)) {
                idx = num;
            }
        }
        idx = Math.min(Math.max(0, idx), Constants.TOURNAMENTS.length-1);
        // console.log(this.props.location.pathname);
        
        this.state = {
            tournamentIdx: idx,
            tab: Constants.TOURNAMENTS[idx].activeTab
        };
        
    }

    public getTournament(): ITournament {
        return Constants.TOURNAMENTS[this.state.tournamentIdx];
    }

    public getTournamentTab(): ITab {
        return this.getTournament().tabs[this.state.tab];
    }

    private changeTournament = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        const idx: number = +event.currentTarget.value;
        this.setState({
            tournamentIdx: idx,
            tab: Constants.TOURNAMENTS[idx].activeTab
        });
    }

    public render(): React.ReactNode {
        return (
            <div>
                {/* HEADER */}
                <div className={styles.headerDiv}>
                    <div className={styles.title}>
                        <div className={styles.name}>{ this.getTournament().name }</div>
                        <div className={styles.date}>{ this.getTournament().date }</div>
                    </div>
                    <div className={styles.headerMenuDiv}>
                        <div className={styles.tournamentDropdown}>
                            <select onChange={this.changeTournament}>
                                {Constants.TOURNAMENTS.map((tournament, idx) =>
                                    <option value={idx} selected={this.state.tournamentIdx === idx}>
                                        {`${tournament.nameShort} (${tournament.date})`}
                                    </option>
                                )}
                            </select>
                        </div>
                        {this.getTournament().tabs.map((tab: ITab, idx: number) =>
                            <button onClick={() => { this.setState({ tab: idx }); }}
                                className={`${styles.padding} ${(this.getTournament().tabs.length-1 === idx) ? styles.lastButton : ""} ${(this.state.tab === idx) ? styles.activeTab : ""}`}
                            >
                                { tab.tabName }
                            </button>
                        )}
                    </div>
                </div>
                {/* CONTENT */}
                <div className={styles.contentDiv}>
                    {this.getTournamentTab().elements.map((element: IElement, idx: number) => {
                        if(element.type === "bracket") {
                            const BracketType = BRACKET_TYPES[element.bracketType];
                            return <BracketType bracket={new CBracket(element.matches)} patch={this.getTournament().patch}
                                        extraStyles={styles.bracketMargin} />
                        }
                        if(element.type === "groupFromMatches" || element.type === "groupFromRecords") {
                            return <VGroup name={element.name} group={new CGroup(element)} gamesAndMatches={element.gamesAndMatches}
                                        patch={this.getTournament().patch} extraStyles={styles.groupMargin} />;
                        }
                        return null;
                    }
                    )}
                </div>
            </div>
        );
    }
}
