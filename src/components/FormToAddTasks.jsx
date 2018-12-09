import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateTimePicker from './DateTimePicker';


class FormToAddTasks extends Component {

  render() {
    return (
                <React.Fragment>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8}>
                            <TextField
                                label="Task Name"
                                id="name"
                                onChange={this.props.onFieldChange('name')}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8}>
                            <DateTimePicker onChange={this.props.onFieldChange('deadline')} />
                        </Grid>
                    </Grid>
                    
                </React.Fragment>
    );
  }
}

export default FormToAddTasks;
