import React from 'react';
import styles from './VGroupStanding.module.css';

import { IGroupRecord } from '../../../data';

interface IProps {
    place: number;
    record: IGroupRecord;
    result: string;
    patch: string;
    gamesAndMatches?: boolean;
}

export class VGroupStanding extends React.Component<IProps> {
    public render(): React.ReactNode {
        const plusMinus = this.props.record.gameWins-this.props.record.gameLosses;
        return (
            <tr className={`${styles[this.props.result]}`}>
                <td>{this.props.place}</td>
                <td className={styles.team}>
                    <span className={styles.teamName}>
                        {this.props.record.team}
                    </span>
                </td>
                <td className={styles.matchWL}>
                    {`${this.props.record.wins} - ${this.props.record.losses}`}
                </td>
                {/* <td className={styles.winPercent}>
                    {`${winPercent}%`}
                </td> */}
                <td className={styles.streak}>
                    {this.props.record.streakCount > 0 ? `${this.props.record.streakCount}${this.props.record.streakType}` : ""}
                </td>
                {(this.props.gamesAndMatches === true) && <>
                    <td className={styles.gameWL}>
                        {`${this.props.record.gameWins} - ${this.props.record.gameLosses}`}
                    </td>
                    <td className={styles.plusMinus}>
                        {`${(plusMinus > 0)?"+":""}${plusMinus}`}
                    </td>
                </>}
            </tr>
        );
    }
}