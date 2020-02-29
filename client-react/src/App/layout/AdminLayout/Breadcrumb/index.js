import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import config from '../../../../config';
import navigationUser from '../../../../menu-items'; 
import navigationAdmin from '../../../../menu-items-admin'; 
import DEMO from "../../../../store/constant";
import Aux from "../../../../hoc/_Aux";
import axios from 'axios'
import { connect } from "react-redux";
const rutaApi = config.rutaApi;

class Breadcrumb extends Component {
    state = {
        main: [],
        item: [],
        isAdmin: false
    };

    async componentDidMount() {
        console.log(JSON.stringify(this.props) + ' breadcrumb')
        const user = await axios.get(rutaApi + 'usuario/' + this.props.userId);
        const isAdmin = user.data.Is_admin;
        this.setState({isAdmin})
       
        const navigation = isAdmin ? navigationAdmin : navigationUser;
        (navigation.items).map((item, index) => {
            if (item.type && item.type === 'group') {
                this.getCollapse(item, index);
            }
            return false;
        });
    };

    componentWillReceiveProps = () => {
        const navigation = this.state.isAdmin ? navigationAdmin : navigationUser;
        (navigation.items).map((item, index) => {
            if (item.type && item.type === 'group') {
                this.getCollapse(item);
            }
            return false;
        });
    };

    getCollapse = (item) => {
        if (item.children) {
            (item.children).filter( collapse => {
                if (collapse.type && collapse.type === 'collapse') {
                    this.getCollapse(collapse,);
                } else if (collapse.type && collapse.type === 'item') {
                    if (document.location.pathname === config.basename+collapse.url) {
                        this.setState({item: collapse, main: item});
                    }
                }
                return false;
            });
        }
    };

    render() {
        let main, item;
        let breadcrumb = '';
        let title = 'Petship';
        if (this.state.main && this.state.main.type === 'collapse') {
            main = (
                <li className="breadcrumb-item">
                    <a href={DEMO.BLANK_LINK}>{this.state.main.title}</a>
                </li>
            );
        }

        if (this.state.item && this.state.item.type === 'item') {
            title = this.state.item.title;
            item = (
                <li className="breadcrumb-item">
                    <a href={DEMO.BLANK_LINK}>{title}</a>
                </li>
            );

            if(this.state.item.breadcrumbs !== false) {
                breadcrumb = (
                    <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">{title}</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/"><i className="feather icon-home"/></Link>
                                        </li>
                                        {main}
                                        {item}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

        }

        document.title = title ;

        return (
            <Aux>
                {breadcrumb}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    //console.log("user profile" + JSON.stringify(state.firebase.auth.uid))
    return {
      userId: state.firebase.auth.uid,
      authError: state.auth.authError
    };
  };
  
  export default connect(mapStateToProps)(Breadcrumb);