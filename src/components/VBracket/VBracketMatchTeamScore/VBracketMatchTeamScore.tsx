import React from 'react';
import { ImageUtil } from '../../../util';
import styles from "./VBracketMatchTeamScore.module.css";

interface IProps {
    team?: string;
    score: string;
    win?: boolean;
    champs: string[];
    results: boolean[];
    scoreWin?: boolean; // for bracket reset first match, show score win if it doesn't match the final result
    scoreOnly?: boolean; // for bracket reset, only show score
    patch: string;
}

export class VBracketMatchTeamScore extends React.Component<IProps> {
    public render(): React.ReactNode {
        const fontClass: string = (this.props.win === undefined) ? "" : (this.props.win) ? "fontWin" : "fontLose";
        const scoreFontClass: string = (this.props.scoreWin === undefined) ? fontClass : (this.props.scoreWin) ? "fontWin" : "fontLose";
        const championImages: JSX.Element [] = [];
        for(let i = 0; i < this.props.champs.length; i++) {
            championImages.push(
                <div className={styles.champion}>
                    <img className={this.props.results[i] ? styles.championWin : styles.championLose}
                            src={ImageUtil.getChampionImage(this.props.champs[i], this.props.patch)}
                            alt={this.props.champs[i]} decoding="async" height={24}/>
                </div>
            );
        }
        return (
            <div className={(this.props.scoreOnly === true) ? styles.bracketMatchTeamDivScoreOnly : styles.bracketMatchTeamDiv}>
                {(!this.props.scoreOnly) &&
                    <div className={`${styles.teamName} ${styles[fontClass]}`}>
                        {this.props.team ? this.props.team : "TBD"}
                    </div>
                }
                {(championImages.length > 0)
                    ?   <div className={(this.props.scoreOnly === true) ? styles.championsDivScoreOnly : styles.championsDiv}>
                            {championImages}
                        </div>
                    :   <div className={styles.championsDivNoChampions}/>
                }
                
                <div className={`${styles.teamScore} ${styles[scoreFontClass]}`}>
                    {this.props.score}
                </div>
            </div>
        );
    }
}
