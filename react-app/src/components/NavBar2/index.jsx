import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        const {leftsolt, centersolt, rightsolt}  = this.props;
        return (
            <div className="nav-bar">
                <div className="nav-left">
                    {leftsolt}
                </div>
                <div className="nav-center">
                    {centersolt}
                </div>
                <div className="nav-right">
                    {rightsolt}
                </div>
            </div>
        )
    }
}
