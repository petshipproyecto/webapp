import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import { Link } from 'react-router-dom';
import NotifIcon from '@material-ui/icons/Grade'
import NotificationsIcon from '@material-ui/icons/Notifications';

const styles = {
  root: {
   
    width: '100%',
    position: 'fixed',
    bottom: 0
   
  }
}; 

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon />} component={Link} to="/basicLayout/search"/>
        <BottomNavigationAction label="Swipe" icon={<FavoriteIcon />} component={Link} to="/basicLayout/swipe" />
        <BottomNavigationAction label="Nofications" icon={<NotificationsIcon />} component={Link} to="/basicLayout/notifications"/>
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} component={Link} to="/basicLayout/profile"/>
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
