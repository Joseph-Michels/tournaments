import React from 'react';
import styles from './VGroupMatch.module.css';

import { CMatch } from '../../../data';
import { ImageUtil } from '../../../util';

interface IProps {
    match: CMatch;
    patch: string;
}

interface IState {
    champInfoShowing: boolean;
}

export class VGroupMatch extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { champInfoShowing: true };
    }

    public toggleChampInfoShowing = (): void => {
        this.setState({
            champInfoShowing: !this.state.champInfoShowing
        });
    }

    public render(): React.ReactNode {
        const winner = this.props.match.getWinner();
        const matchResults = (winner === 1)
                                ? ["Win", "Lose"]
                                : (winner === 2)
                                    ? ["Lose", "Win"]
                                    : ["", ""];
        let gameResults: string[][] = [];
        for(let result of this.props.match.getResults()) {
            gameResults.push((result) ? ["Win", "Lose"] : ["Lose", "Win"]);
        }
        return (
            <div className={styles.groupMatchContainer}>
                <div className={(this.state.champInfoShowing) ? styles.infoButtonInfoShowing : styles.infoButton}>
                    <button className={styles.unstyleButton} onClick={this.toggleChampInfoShowing}>
                        <img src={ImageUtil.getImage("info")} alt={"info"} width={14}/>
                    </button>
                </div>

                <div className={styles.teamAndPicksDiv1}>
                    <div className={`${(this.state.champInfoShowing)
                                            ? styles.teamNameBottomBorder
                                            : styles.teamName
                                        } ${matchResults[0]
                                            ? styles[`font${matchResults[0]}`]
                                            : styles.fontBase}`}
                    >
                        {this.props.match.team1 ? this.props.match.team1 : "TBD"}
                    </div>
                    {(this.state.champInfoShowing) &&
                        <div className={(this.props.match.getGamesInSet() === 1) ? styles.champDivBo1 : styles.champDivBo3}>
                            {this.props.match.getChamps1().map((champ, idx) => 
                                <img className={`${styles.champImg} ${gameResults[idx][0] ? styles[`champ${gameResults[idx][0]}`] : ""}`}
                                    src={ImageUtil.getChampionImage(champ, this.props.patch)}
                                    alt={champ} decoding="async" height={24}/>
                            )}
                        </div>
                    }
                </div>
                <div className={`${styles.teamScoreAndBans1} ${matchResults[0] ? styles[`font${matchResults[0]}`] : styles.fontBase}`}>
                    <div className={(this.state.champInfoShowing) ? styles.teamScore : ""}>
                        {this.props.match.getScore1()}
                    </div>
                    {(this.state.champInfoShowing) && <>
                        {(this.props.match.ban1)
                        ?   <>
                                <img className={styles.banChamp} src={ImageUtil.getChampionImage(this.props.match.ban1, this.props.patch)}
                                    alt={`ban ${this.props.match.ban1}`} decoding="async" height={24}/>
                                <img className={styles.banChamp} src={ImageUtil.getImage("ban")}
                                    alt={"ban"} decoding="async" height={24}/>
                            </>
                        :
                            <img className={styles.banChamp} src={ImageUtil.getImage("unknownBan")}
                                alt={`ban unknown`} decoding="async" height={24}/>
                        }
                    </>}
                </div>

                <div className={`${styles.teamScoreAndBans2} ${matchResults[1] ? styles[`font${matchResults[1]}`] : styles.fontBase}`}>
                    <div className={(this.state.champInfoShowing) ? styles.teamScore : ""}>
                        {this.props.match.getScore2()}
                    </div>
                    {(this.state.champInfoShowing) && <>
                        {(this.props.match.ban2)
                        ?   <>
                                <img className={styles.banChamp} src={ImageUtil.getChampionImage(this.props.match.ban2, this.props.patch)}
                                    alt={`ban ${this.props.match.ban2}`} decoding="async" height={24}/>
                                <img className={styles.banChamp} src={ImageUtil.getImage("ban")}
                                    alt={"ban"} decoding="async" height={24}/>
                            </>
                        :
                            <img className={styles.banChamp} src={ImageUtil.getImage("unknownBan")}
                                alt={`ban unknown`} decoding="async" height={24}/>
                        }
                    </>}
                </div>
                <div className={styles.teamAndPicksDiv2}>
                    <div className={`${(this.state.champInfoShowing)
                                            ? styles.teamNameBottomBorder
                                            : styles.teamName
                                        } ${matchResults[1]
                                            ? styles[`font${matchResults[1]}`]
                                            : styles.fontBase}`}
                    >
                        {this.props.match.team2 ? this.props.match.team2 : "TBD"}
                    </div>
                    {(this.state.champInfoShowing) &&
                        <div className={(this.props.match.getGamesInSet() === 1) ? styles.champDivBo1 : styles.champDivBo3}>
                            {this.props.match.getChamps2().map((champ, idx) =>
                                <img className={`${styles.champImg} ${gameResults[idx][1] ? styles[`champ${gameResults[idx][1]}`] : ""}`}
                                    src={ImageUtil.getChampionImage(champ, this.props.patch)}
                                    alt={champ} decoding="async" height={24}/>
                            )}
                        </div>
                    }
                </div>
            </div>
        );
    }
}