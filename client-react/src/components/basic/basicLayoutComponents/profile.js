import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings'
import SimpleBottomNavigation from '../BottomNavigation'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120, 
  },
  pad: {
      padding: 80
  },
  padForDescription:{
      padding:20
  }
});

function Profile(props) {
 
  const classes = useStyles();
  return (
      
    <Grid>
        <Grid >
         {/* Settings  Section*/}
            <Grid>
                
                <Grid item xs={4} justify="right" >
                <SettingsIcon />
                </Grid>


            </Grid>
           
           
           
            {/*Profile */}
        <Grid  container justify="center" alignItems="center" className={classes.pad}>
            <Avatar alt="Remy Sharp" src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png" className={classes.bigAvatar} />
            <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                          Rodolfo
                    </Typography>
                    
                    
            </Paper>

            <Grid className={classes.padForDescription} >
                <Paper  >
                        <Typography variant="p" component="p">
                            Soy un perro feliz
                        </Typography>
                </Paper>
            </Grid>
            </Grid>

            <Typography variant="p" component="h4">
                           Intereses
            </Typography>
            <Typography variant="p" component="p">
                           #correr #jugar
            </Typography>

            <Typography variant="p" component="h4">
                           Info de Contacto
            </Typography>

       </Grid>
       <SimpleBottomNavigation/>
    </Grid>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Profile;
