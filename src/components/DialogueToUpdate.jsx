import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateTimePicker from './DateTimePicker';

export default class FormDialog extends React.Component {
  state = {
    name: this.props.taskToEdit.task_name,
    deadline: '',
  };

  onFieldChange = (field) => e => {
    this.setState({ [field]: e.target.value });
  }

  handleSend = () => {
    this.props.requiredProps.updateTask(this.props.requiredProps.projectId,
      this.props.requiredProps.taskId, { task_name: this.state.name, deadline: this.state.deadline })
    this.props.handleClose();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              defaultValue={this.props.taskToEdit.task_name}
              onChange={this.onFieldChange('name')}
              margin="dense"
              id="task_name"
              label="Task name"
              fullWidth
            />
             <DateTimePicker date={this.props.taskToEdit.deadline} onChange={this.onFieldChange('deadline')} />
            {/* <TextField
              defaultValue={this.props.taskToEdit.deadline}
              onChange={this.onFieldChange('deadline')}
              margin="dense"
              id="deadline"
              label="Deadline"
              fullWidth
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSend} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}