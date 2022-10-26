import React from 'react';
import styles from './VGroup.module.css';

import { CGroup } from '../../data';

import { VGroupStanding } from './VGroupStanding';
import { VGroupMatch } from './VGroupMatch';
import { Warning } from '../Warning';

interface IProps {
    name: string;
    group: CGroup;
    patch: string;
    gamesAndMatches?: boolean;
    extraStyles?: string;
}

export class VGroup extends React.Component<IProps> {
    // public toggleAllChampInfoShowing(matches: any[]) {
    //     matches.forEach((match) => {
    //         console.log(match);
    //         console.log((match as VGroupMatch));
    //         (match as React.Component).setState({ champInfoShowing: false });
    //     });
    // }

    public render(): React.ReactNode {
        const stylesArr: string[] = (this.props.extraStyles !== undefined)
                                        ? [this.props.extraStyles]
                                        : [];
        let matches: JSX.Element[] = [];
        for(let match of this.props.group.matches) {
            matches.push(<VGroupMatch match={match} patch={this.props.patch} />);
        }
        return ( <>
            <div className={stylesArr.join(" ")}>
                <table className={styles.groupTable}> <tbody>
                    <tr>
                        <th colSpan={(this.props.gamesAndMatches) ? 6 : 4}>
                            <div className={styles.header}>
                                { this.props.name }
                            </div>
                        </th>
                    </tr>
                    {this.props.group.standings.map(
                        (standing, i) => {
                            return <VGroupStanding place={i+1} record={standing}
                                        result={this.props.group.resultFunction(i+1)}
                                        patch={this.props.patch}
                                        gamesAndMatches={this.props.gamesAndMatches}
                                    />
                        }
                    )}
                </tbody> </table>
                {(this.props.group.matches.length > 0) &&
                    <>
                        <div className={styles.matches}>
                            Matches
                            {/* <button className={styles.unstyleButton} onClick={() => {
                                this.toggleAllChampInfoShowing(matches);
                            }}>
                                <img src={ImageUtil.getImage("info")} alt={"info"} width={14}/>
                            </button> */}
                        </div>
                        {
                            matches
                        }
                    </>
                }
            </div>
            <Warning message='CSS for group matches is to be fixed' />
        </>);
    }
}
