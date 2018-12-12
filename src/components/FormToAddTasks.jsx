import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditTask from './DialogueToUpdate';
import DateTimePicker from './DateTimePicker';
import { addTask, deleteTask, updateTask } from '../redux/actions/tasks';


class FormToAddTasks extends Component {
    state = { name: '', time: moment(new Date()).format('YYYY-MM-DD'), edit: false, taskToEdit: null }

    onFieldChange = (field) => e => {
    this.setState({[field]: e.target.value});
  }

    onEditTask = () => {
      const arrToFind = this.props.projects.activeProject.tasks.slice();
      const ind = arrToFind.findIndex((item) => {
        if (item.id === this.props.taskId) return item;
      });
      this.setState({ edit: true, taskToEdit: arrToFind[ind] });
    }

    completedEdit = () => {
        this.setState({ edit: false });
    }

    render() {
      const { name, time, edit, taskToEdit } = this.state;
      const { projectId, taskId, projects } = this.props;
      if (projects.activeProject !== null) {
        const length = projects.activeProject.tasks.length + 1;
        return (
                <React.Fragment>
                    <Grid container>
                        {edit ? <EditTask handleClose={this.completedEdit} open={edit} requiredProps={this.props} taskToEdit={taskToEdit} /> : null}
                        <Grid item xs={12} sm={12} md={8}>
                            <Button onClick={() => this.props.addTask(projectId, name, time, length)} variant='contained' color='primary'>Add task</Button>
                            <Button onClick={() => this.props.deleteTask(projectId, taskId)} variant='contained' color='primary'>Delete task</Button>
                            <Button onClick={() => this.onEditTask(taskId)} variant='contained' color='primary'>Update task</Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <TextField
                                label="Task Name"
                                id="task_name"
                                onChange={this.onFieldChange('name')}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8}>
                            <DateTimePicker onChange={this.onFieldChange('deadline')} />
                        </Grid>
                    </Grid>
                </React.Fragment>
      );
      } else {
          return 'Loading'
      }
    }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (projectId, name, time, length) => dispatch(addTask(projectId, name, time, length)),
    deleteTask: (projectId, taskId) => dispatch(deleteTask(projectId, taskId)),
    updateTask: (projectId, taskId, editedTask) => dispatch(updateTask(projectId, taskId, editedTask)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(FormToAddTasks);
