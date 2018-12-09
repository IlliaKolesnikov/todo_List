import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Tasks from './Tasks';
import FormToAdd from './FormToAddProjects';
import FormToAddTasks from './FormToAddTasks';
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
  center: {
    textAlign: 'center',
  },
  menuItem: {
    textAlign: 'center',
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
});

class List extends React.Component {
  state = { index: null, name: '', color: '', deadline: '2018-12-10 20:00:00' }

  componentDidMount() {
    this.props.getProjects();
  }

  show = (index) => {
    this.setState({ index });
  }

  back = () => {
    this.setState({ index: null });
  }

  onFieldChange = (field) => e => {
    this.setState({[field]: e.target.value});
  }

  render() {
    const { classes, history } = this.props;
    const { index, name, deadline } = this.state;
    const { projects, isLoading, error } = this.props.projects;
    if (isLoading) {
      return 'Loading';
    }
    return (
        <Grid container justify='center' className={classes.root}>
          <Card style={{ height: '100%', minWidth: 500 }}>
            <CardHeader className={classes.header} title='Projects list'
              titleTypographyProps={{ color: 'inherit' }}
            />
            <CardContent>
              <Grid container >

                <Grid item className={classes.center} md={4}>
                 
                  <MenuList >
                  {index !== null ? <Tasks back={this.back} listOfTasks={index} name={name} time={deadline}/>
                    : projects.map((item) => {
                      return (
                        <MenuItem className={classes.menuItem} onClick={() => this.show(item.id)}>{item.project_name}</MenuItem>
                      )
                    })}
                    </MenuList>
                </Grid>
                <Grid item className={classes.center} md={8}>
                   {index === null ? <React.Fragment>
                     <Button onClick={() => this.props.addProject(this.state.name, this.state.color)} variant='contained' color='primary'>Add project</Button>
                    <FormToAdd onFieldChange={this.onFieldChange} task={index}/> 
                    </React.Fragment> : <FormToAddTasks onFieldChange={this.onFieldChange} /> }
                </Grid>
              </Grid>
            </CardContent>
          </Card >
        </Grid>
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
    addProject: (name, color) => dispatch(addProject(name, color)),
    getProjects: () => dispatch(getProjects()),
  };
}


export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List)));
