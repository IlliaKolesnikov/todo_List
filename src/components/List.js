import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Tasks from './Tasks';
import { addProject, getProjects } from '../redux/actions/projects';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 30,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  header: {
    backgroundColor: 'rgb(68, 138, 255)',
    color: 'white',
  },
});

class List extends React.Component {
  state = { index: null }

  componentDidMount() {
    this.props.getProjects();
  }

  show = (index) => {
    this.setState({ index });
  }

  back = () => {
    this.setState({ index: null });
  }

  render() {
    const { classes, history } = this.props;
    const { index } = this.state;
    const { projects, isLoading, error } = this.props.projects;
    if (isLoading) {
      return 'Loading';
    }
    return (
      <div>
        <Grid container justify='center' className={classes.root}>
          <Card style={{ height: '100%' }}>
            <CardHeader className={classes.header} title='Projects list'
              titleTypographyProps={{ color: 'inherit' }}
            />
            <CardContent>
              <Grid container>
                <Button onClick={this.props.addProject} variant='contained' color='secondary'>Add project</Button>
                <Grid item>
                  {this.state.index !== null ? <Tasks back={this.back} listOfTasks={projects[index]} />
                    : projects.map((item, index) => {
                      return (
                        <Button onClick={() => this.show(index)} variant='contained' color='primary'>{item.project_name}</Button>
                      )
                    })}
                </Grid>
              </Grid>
            </CardContent>
          </Card >
        </Grid>
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProject: () => dispatch(addProject()),
    getProjects: () => dispatch(getProjects()),
  };
}


export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List)));
