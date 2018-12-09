import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class FormToAdd extends Component {


  render() {
    return (
                <React.Fragment>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Project Name"
                                id="name"
                                onChange={this.props.onFieldChange('name')}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label="Color"
                                id="color"
                                onChange={this.props.onFieldChange('color')}
                            />
                        </Grid>
                    </Grid>
                </React.Fragment>
    );
  }
}

export default FormToAdd;