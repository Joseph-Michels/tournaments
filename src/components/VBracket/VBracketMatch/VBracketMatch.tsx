import React from "react";
import styles from "./VBracketMatch.module.css";

import { CMatch } from "../../../data";
import { ImageUtil } from "../../../util";

import { VBracketMatchTeamScore } from "../VBracketMatchTeamScore";

interface IProps {
    match: CMatch | null;
    scoreOnly?: boolean;
    overrideResult?: CMatch | null;
    patch: string;
}

interface IState {
    banInfoShowing: boolean;
}

export class VBracketMatch extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            banInfoShowing: false
        };
    }

    public toggleBanInfoShowing = () => {
        this.setState({
            banInfoShowing: !this.state.banInfoShowing
        });
    }

    public render(): React.ReactNode {
        const thisMatchWinner: number = (this.props.match) ? this.props.match.getWinner() : 0;
        const matchWinner: number = (this.props.overrideResult) ? this.props.overrideResult.getWinner() : thisMatchWinner;
        return (
            <div className={styles.matchDiv}>
                {(this.props.match?.ban1 || this.props.match?.ban2 || this.props.overrideResult?.ban1 || this.props.overrideResult?.ban2) && !this.props.scoreOnly &&
                    <div className={styles.infoButton}>
                        <button className={styles.unstyleButton} onClick={this.toggleBanInfoShowing}>
                            <img src={ImageUtil.getImage("info")} alt={"info"} width={16}/>
                        </button>
                    </div>
                }
                <VBracketMatchTeamScore
                    team={(this.props.match) ? this.props.match.team1 : undefined}
                    score={(this.props.match) ? `${this.props.match.getScore1()}` : ""}
                    win={(matchWinner > 0) ? matchWinner === 1 : undefined}
                    champs={(this.props.match) ? this.props.match.getChamps1() : []}
                    results={(this.props.match) ? this.props.match.getResults() : []}
                    scoreWin={(matchWinner !== thisMatchWinner) ? thisMatchWinner === 1 : undefined}
                    scoreOnly={this.props.scoreOnly}
                    patch={this.props.patch}
                />
                <VBracketMatchTeamScore
                    team={(this.props.match) ? this.props.match.team2 : undefined}
                    score={(this.props.match) ? `${this.props.match.getScore2()}` : ""}
                    win={(matchWinner > 0) ? matchWinner === 2 : undefined}
                    champs={(this.props.match) ? this.props.match.getChamps2() : []}
                    results={(this.props.match) ? this.props.match.getResultsInverted() : []}
                    scoreWin={(matchWinner !== thisMatchWinner) ? thisMatchWinner === 2 : undefined}
                    scoreOnly={this.props.scoreOnly}
                    patch={this.props.patch}
                />
                {this.props.match && this.state.banInfoShowing && !this.props.scoreOnly && <>
                    {(this.props.match.ban1) &&
                        <div className={(this.props.overrideResult) ? styles.banInfo1WithReset : styles.banInfo1}>
                            <img className={styles.padLeft} src={ImageUtil.getChampionImage(this.props.match.ban1, this.props.patch)}
                                alt={this.props.match.ban1} decoding="async" height={24}/>
                            <img className={styles.banSymbol} src={ImageUtil.getImage("ban")}
                                alt={this.props.match.ban1} decoding="async" height={24}/>
                        </div>
                    }
                    { /* TODO IF THERES NO BAN FOR FIRST MATCH */ }
                    {(this.props.overrideResult) &&
                        <div className={styles.resetMatchBanInfo1}>
                            {(this.props.overrideResult.ban1) && <>
                                <img className={styles.padLeft} src={ImageUtil.getChampionImage(this.props.overrideResult.ban1, this.props.patch)}
                                    alt={this.props.overrideResult.ban1} decoding="async" height={24}/>
                                <img className={styles.banSymbol} src={ImageUtil.getImage("ban")}
                                    alt={this.props.match.ban1} decoding="async" height={24}/>
                            </>}
                        </div>
                    }
                    {(this.props.match.ban2) &&
                        <div className={(this.props.overrideResult) ? styles.banInfo2WithReset : styles.banInfo2}>
                            <img className={styles.padLeft} src={ImageUtil.getChampionImage(this.props.match.ban2, this.props.patch)}
                                alt={this.props.match.ban2} decoding="async" height={24}/>
                            <img className={styles.banSymbol} src={ImageUtil.getImage("ban")}
                                alt={this.props.match.ban1} decoding="async" height={24}/>
                        </div>
                    }
                    { /* TODO IF THERES NO BAN FOR FIRST MATCH */ }
                    {(this.props.overrideResult) &&
                        <div className={styles.resetMatchBanInfo2}>
                            {(this.props.overrideResult.ban2) && <>
                                <img className={styles.padLeft} src={ImageUtil.getChampionImage(this.props.overrideResult.ban2, this.props.patch)}
                                    alt={this.props.overrideResult.ban2} decoding="async" height={24}/>
                                <img className={styles.banSymbol} src={ImageUtil.getImage("ban")}
                                    alt={this.props.match.ban1} decoding="async" height={24}/>
                            </>}
                        </div>
                    }
                </>}
            </div>
        );
    }
}
