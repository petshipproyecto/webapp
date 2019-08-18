import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';
import windowSize from 'react-window-size';

import NavSearch from './NavSearch';
import Aux from "../../../../../hoc/_Aux";
// import DEMO from "../../../../../store/constant";
import * as actionTypes from "../../../../../store/actions";

import Avatar1 from '../../../../../assets/images/user/avatarCat.jpg';
import Avatar2 from '../../../../../assets/images/user/avatarDog.jpg';
import Avatar3 from '../../../../../assets/images/user/avatarChinchilla.jpg';





class NavLeft extends Component {

    render() {
        // let iconFullScreen = ['feather'];
        // iconFullScreen = (this.props.isFullScreen) ? [...iconFullScreen, 'icon-minimize'] : [...iconFullScreen, 'icon-maximize'];

        let navItemClass = ['nav-item'];
        if (this.props.windowWidth <= 575) {
            navItemClass = [...navItemClass, 'd-none'];
        }
        let dropdownRightAlign = false;
        if (this.props.rtlLayout) {
            dropdownRightAlign = true;
        }
        return (
            <Aux>
                <ul className="navbar-nav mr-auto">
                    {/* <li><a href={DEMO.BLANK_LINK} className="full-screen" onClick={this.props.onFullScreen}><i className={iconFullScreen.join(' ')} /></a></li> */}
                    <li className={navItemClass.join(' ')}>
                        <Dropdown alignRight={dropdownRightAlign}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                Selecionar Perfil de Mascota
                            </Dropdown.Toggle>
                            <ul>
                                <Dropdown.Menu alignRight className="notification">
                                <div className="noti-head">
                  <h6 className="d-inline-block m-b-0">Perfiles de Mascota</h6>
                  
                </div>
                                <ul className="noti-body">
                                <a href="/dashboard/default"> 
                                    <li className="notification">
                                        
                                        <div className="media">
                                            <img className="media-object img-radius" src={Avatar1} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p class="pt-3">Firulais</p>
                                            </div>
                                        </div>
                                    </li>
                                    </a> 
                                </ul>
                                <ul className="noti-body">
                                <a href="/dashboard/default">
                                    <li className="notification">
                                        <div className="media">
                                            <img className="media-object img-radius" src={Avatar2} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p class="pt-3">Kitty</p>
                                            </div>
                                        </div>
                                    </li>
                                    </a>
                                </ul>
                                <ul className="noti-body">
                                <a href="/dashboard/default"> 
                                    <li className="notification">
                                        <div className="media">
                                            <img className="media-object img-radius" src={Avatar3} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p class="pt-3">Lola</p>
                                            </div>
                                        </div>
                                    </li>
                                    </a> 
                                </ul>
                                </Dropdown.Menu>
                            </ul>
                        </Dropdown>
                    </li>
                    <li className="nav-item"><NavSearch/></li>
                </ul>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFullScreen: state.isFullScreen,
        rtlLayout: state.rtlLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreen: () => dispatch({type: actionTypes.FULL_SCREEN}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(NavLeft));
