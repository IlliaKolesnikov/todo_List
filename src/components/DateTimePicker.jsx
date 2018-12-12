import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class DateAndTimePickers extends Component {
  render() {
    const { classes } = this.props;
    return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Next appointment"
        onChange={this.props.onChange}
        defaultValue={moment(this.props.date).format('YYYY-MM-DD') || moment(new Date()).format('YYYY-MM-DD')}
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    );
  }
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);