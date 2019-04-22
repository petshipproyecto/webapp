import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SimpleBottomNavigation from '../BottomNavigation'

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  pad:{
    margin: 10,
  }
};

 function Search(props){
    const { classes } = props;
     
    return (
      <div>
        <h2>Search Section </h2>
        
      <Paper  elevation={1} className={classes.pad}>
      <Grid container >
         <Grid item xs={4}>
            <Avatar alt="Remy Sharp" src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png" className={classes.bigAvatar} />
         </Grid>
         <Grid  item xs={8}>        
                <Typography component="p">
                Info de alguna mascota
                </Typography>
        </Grid>

      </Grid>
      </Paper>
      <SimpleBottomNavigation/>
    </div>
      
      
      
      
      )
    }
  

  export default withStyles(styles)(Search);