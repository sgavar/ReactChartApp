/**
 * Created by sgou on 1/9/2017.
 */
import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component
{
    render(){
        return (
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                       <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                </ul>
        )
    }

}

export default Sidebar;