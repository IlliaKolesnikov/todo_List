import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { getProjectById } from '../redux/actions/projects';

const styles = theme => ({
    menuItem: {
        '&:focus': {
            backgroundColor: 'rgb(68, 138, 255)',
            color: theme.palette.common.white,
            borderRadius: 4,
        },
    },
    primary: {},
    icon: {},
});

class Tasks extends React.Component {
  componentDidMount() {
    this.props.getProjectById(this.props.listOfTasks);
  }

  render() {
    const { listOfTasks, classes, projects, name, time } = this.props;
    if (projects.isFetching) {
      return 'Loading';
    }
    return (
            <div>
                <Grid container justify='center'>
                    <MenuList>
                        <MenuItem onClick={this.props.back}>Get back</MenuItem>
                        {projects.activeProject.tasks.map((task, index) => {
                          return (
                                <MenuItem key={task.id} onClick={() => this.props.onIndexChange(task.id)} className={classes.menuItem}>{task.task_name}</MenuItem>
                          )
                        })}
                    </MenuList>
                </Grid>
            </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProjectById: (projectId) => dispatch(getProjectById(projectId)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Tasks));
