import React from 'react';
import styles from './Warning.module.css';

interface IProps {
    message: string;
}

interface IState {
    showing: boolean;
}

export class Warning extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { showing: true };
    }

    close = () => {
        this.setState({ showing: false });
    }

    public render(): React.ReactNode {
        return (
            <>
                {(this.state.showing) &&
                    <button className={styles.warningContainer} onClick={this.close}>
                        { this.props.message }
                        <div className={styles.closeButton}>
                            x
                        </div>
                    </button>
                }
            </>
        );
    }
}
