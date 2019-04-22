import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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




 function Notifications(props){
    const { classes } = props;
     
    return (
      <div>
        <h2>Notifications Section</h2>
        
      <Paper  elevation={1} className={classes.pad}>
            <Grid container spacing={24}>
              <Grid item xs={4}>
                  <Avatar alt="Remy Sharp" src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png" className={classes.bigAvatar} />
              </Grid>
              <Grid  item xs={5}>        
                      <Typography component="p">
                      Un perrito te likeó
                      </Typography>
              </Grid>
              <Grid item xs={3}>
                  <Button variant="outlined" color="secondary" > Ver </Button>
              </Grid>

            </Grid>
      </Paper>
      <SimpleBottomNavigation/>
    </div>
      
      
      
      
      )
    }
  

  export default withStyles(styles)(Notifications);