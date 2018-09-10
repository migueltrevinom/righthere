import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/app.action';
import { bindActionCreators } from 'redux';
import { Theme } from '../../node_modules/@material-ui/core/styles/createMuiTheme';
import createStyles from '../../node_modules/@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 20,
        },
    });

type State = {
    open: boolean;
};

class Home extends React.Component<WithStyles<typeof styles>, State> {

    render() {
        return (
            <div>
                This is Home
            </div>
        );
    }
}

export default connect(
    (state: any) => {
        return {
            ...state.home
        };
    },
    (dispatch) => {
        return bindActionCreators({ addUser }, dispatch);
    }
)(withRoot(withStyles(styles)(Home)));