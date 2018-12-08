import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

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
    render() {
        console.log(this.props);
        const { listOfTasks, classes } = this.props;
        return (
            <div>
                <Grid container justify='center'>
                    <MenuList>
                        <MenuItem onClick={this.props.back}>getBack</MenuItem>
                    {listOfTasks.tasks.map((task, index) => {
                        return (
                            <MenuItem className={classes.menuItem}>{task.content}</MenuItem>
                        )
                    })}
                    </MenuList>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Tasks);
