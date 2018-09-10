import * as React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withRoot from '../../withRoot';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { getClassRooms } from '../../redux/actions/app.action';
import { bindActionCreators } from 'redux';

const styles = (theme: any) => ({
    // appBar: {
    //     position: 'relative',
    // },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%'
        // flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

const classRooms = [
    {
        key: 1,
        title: 'Math',
        image: '',
        description: 'Classroom 100 A'
    },
    {
        key: 2,
        image: '',
        title: 'History',
        description: 'Main Hall 101'
    },
    {
        key: 3,
        image: '',
        title: 'Science',
        description: 'Technology Building - Room 30'
    },
    {
        key: 4,
        title: 'Dramatics',
        image: '',
        description: 'Drama Club - Room 2'
    },
    {
        key: 5,
        image: '',
        title: 'Special Education Day Class',
        description: 'Main Hall - Room 20'
    },
    {
        key: 6,
        image: '',
        title: 'Algebra',
        description: 'Technology Building - Room 14A'
    }

];

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
interface Props extends WithStyles<typeof styles> {
    rooms: string;
}

class ClassRoomContainer extends React.Component<any, any> {
    
    constructor(props: Props) {
        super(props);
        console.log(props);
        console.log(this.props.getClassRooms());
      }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <CssBaseline />
                
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                                Attendance made it easy
                            </Typography>
                            <Typography variant="title" align="center" color="textSecondary" paragraph>
                                Create your classroom in a couple of clicks and start recording for free all your students attendance. Generate reports and see statistics for your classrooms attendance history
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    {/* <Grid item>
                                        <Button variant="contained" color="primary">
                                            Create your classroom
                                        </Button>
                                    </Grid> */}
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Create your classroom
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                            {classRooms.map(card => (
                                <Grid item key={card.key} sm={6} md={4} lg={3}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://www.prettyprudent.com/wp-content/uploads/2015/11/10093151/10-Things-Your-Teacher-Wants-for-the-Classroom.jpg" // eslint-disable-line max-len
                                            title="Image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                {card.title}
                                            </Typography>
                                            <Typography>
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="title" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subheading" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
                {/* End footer */}
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
        return bindActionCreators({ getClassRooms }, dispatch);
    }
)(withRoot(withStyles(styles)(ClassRoomContainer)));