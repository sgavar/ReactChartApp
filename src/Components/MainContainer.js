/**
 * Created by sgou on 1/9/2017.
 */
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import logo from '../logo.svg';
import {Row, Col} from 'react-bootstrap';
import './MainContainer.css';

class MainContainer extends Component
{
    render(){
        return(
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <Sidebar/>
                </div>

                <div id="page-content-wrapper">
                    <div className="main-container">
                        <Row className="show-grid">
                            <div className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <h2>Welcome to React</h2>
                            </div>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={3} lg={4}>
                                <p>This is left half container</p>
                                <a href="#menu-toggle" className="btn btn-default">Show menu</a>
                            </Col>
                            <Col xs={12} md={9} lg={8}>
                                <p>This is a paragraph. Main content goes here.</p>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainer;