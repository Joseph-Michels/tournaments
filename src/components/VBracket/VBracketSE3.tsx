import React from 'react';
import styles from "./VBracket.module.css";

import { CBracket, CMatch, EBracketMatchNameSE3 as MatchName } from "../../data";

import { VBracketMatch } from './VBracketMatch';

interface IProps {
    bracket: CBracket;
    patch: string;
    extraStyles?: string;
}

export class VBracketSE3 extends React.Component<IProps> {
    getMatch(n: number): CMatch | null {
        return this.props.bracket.matches.length > n ? this.props.bracket.matches[n] : null;
    }

    public render(): React.ReactNode {
        const stylesArr: string[] = (this.props.extraStyles !== undefined)
                                        ? [styles.bracketGrid, styles.bracketGridSE3, this.props.extraStyles]
                                        : [styles.bracketGrid, styles.bracketGridSE3];
        return (
            <div className={stylesArr.join(" ")}>
                <div className={`${styles.spanRows2} ${styles.bracketHeader}`}>Semi-Finals</div>
                <div className={`${styles.spanRows2}`} />
                <VBracketMatch match={ this.getMatch(MatchName.SEMIS) } patch={this.props.patch} />

                <div className={`${styles.spanRows6}`} />
                <div className={`${styles.lineTop} ${styles.spanRows2} ${styles.spanCols2}`} />

                <div className={`${styles.spanRows4}`} />
                <div className={`${styles.lineTop} ${styles.spanRows2}`} />
                            

                <div className={`${styles.spanRows2} ${styles.bracketHeader}`}>Finals</div>
                <div />
                <VBracketMatch match={ this.getMatch(MatchName.FINALS) } patch={this.props.patch} />
            </div>
        );
    }
}
