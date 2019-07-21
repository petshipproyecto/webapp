import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class Dashboard extends React.Component {
    render() {
        const tabContent = (
            <Aux>
                
            </Aux>
        );

        return (
            <Aux>
                <Row>
                    <div>
                    <img src={avatar1} />
                    </div>
                                    
                    pegue su texto aqui
                    
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;