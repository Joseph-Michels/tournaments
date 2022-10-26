import React from 'react';
import styles from "./VBracket.module.css";

import { CBracket, CMatch, EBracketMatchNameDE4 as MatchName } from "../../data";

import { VBracketMatch } from './VBracketMatch';

interface IProps {
    bracket: CBracket;
    patch: string;
    extraStyles?: string;
}

export class VBracketDE4 extends React.Component<IProps> {
    getMatch(n: number): CMatch | null {
        return this.props.bracket.matches.length > n ? this.props.bracket.matches[n] : null;
    }

    public render(): React.ReactNode {
        const hasGFReset: boolean = (this.props.bracket.matches.length > MatchName.GF_RESET) ? true : false;
        const stylesArr: string[] = (this.props.extraStyles !== undefined)
                                        ? [styles.bracketGrid, styles.bracketGridDE4, this.props.extraStyles]
                                        : [styles.bracketGrid, styles.bracketGridDE4];
        return (
            <div className={stylesArr.join(" ")}>
                <div className={`${styles.spanRows17}`} />
                <div className={`${styles.lineLeft} ${styles.lineBot}`} />
                <div />
                <div className={`${styles.lineLeft} ${styles.lineBot}`} />
                <div />


                <div className={`${styles.spanRows2} ${styles.bracketHeader}`}>Round 1</div>
                <div />
                <VBracketMatch match={ this.getMatch(MatchName.UB_R1_M1) } patch={this.props.patch} />
                <div className={`${styles.spanRows2}`} />
                <VBracketMatch match={ this.getMatch(MatchName.UB_R1_M2) } patch={this.props.patch} />
                <div className={`${styles.spanRows4}`} />
                <VBracketMatch match={ this.getMatch(MatchName.LB_R1_M1) } patch={this.props.patch} />

                <div className={`${styles.spanRows5} ${styles.spanCols2}`} />
                <div className={`${styles.lineTop} ${styles.lineRight} ${styles.spanRows2}`} />
                <div className={`${styles.spanRows2}`} />
                <div className={`${styles.lineBot} ${styles.lineRight} ${styles.spanRows2}`} />
                <div className={`${styles.spanRows5} ${styles.spanCols2}`} />
                <div className={`${styles.spanRows3}`} />
                <div className={`${styles.lineTop} ${styles.spanCols2}`} />
                <div className={`${styles.spanCols2}`} />

                <div className={`${styles.spanRows2}`} />
                <div className={`${styles.lineTop} ${styles.lineBot} ${styles.spanRows2}`} />
                <div className={`${styles.spanRows2}`} />
                <div className={`${styles.lineLeft} ${styles.lineBot}`} />
                <div className={`${styles.spanRows2}`} />
                
            
                <div className={`${styles.spanRows2} ${styles.bracketHeader}`}>Upper/Lower Finals</div>
                <div className={`${styles.spanRows4}`} />
                <VBracketMatch match={ this.getMatch(MatchName.UB_F) } patch={this.props.patch} />
                <div className={`${styles.spanRows6}`} />
                <VBracketMatch match={ this.getMatch(MatchName.LB_F) } patch={this.props.patch} />
                <div />

                <div className={`${styles.spanRows8} ${styles.spanCols2}`} />
                <div className={`${styles.lineTop} ${styles.lineRight} ${styles.spanRows4}`} />
                <div className={`${styles.spanRows2}`} />
                <div className={`${styles.lineBot} ${styles.lineRight} ${styles.spanRows4}`} />
                <div className={`${styles.spanRows3} ${styles.spanCols3}`} />
                
                <div className={`${styles.spanRows4}`} />
                <div className={`${styles.lineTop} ${styles.lineBot} ${styles.spanRows2}`} />
                <div className={`${styles.spanRows4}`} />

                <div className={`${styles.spanRows2} ${(hasGFReset) ? styles.spanCols2 : ""} ${styles.bracketHeader}`}>Grand Finals</div>
                <div className={`${styles.spanRows9} ${styles.spanCols2}`} />
                {(hasGFReset) ? (
                    <>
                        <VBracketMatch overrideResult={this.getMatch(MatchName.GF_RESET)} match={ this.getMatch(MatchName.GF) } patch={this.props.patch} />
                        <div className={`${styles.spanRows3}`} />
                        <VBracketMatch scoreOnly={true} match={ this.getMatch(MatchName.GF_RESET) } patch={this.props.patch} />
                    </>
                ) : (
                    <VBracketMatch match={ this.getMatch(MatchName.GF) } patch={this.props.patch} />
                )}
            </div>
        );
    }
}
