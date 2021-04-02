import React, { Component } from 'react';
import './index.css'
class Tab extends Component {
    constructor(){
        super();
        this.state = {
            tabname:['精选','首页','专区'],
            index:0,
        }
    }
    tabclick = (index) => {
        this.setState({
            index:index
        })
        console.log(this.props.tabclick)
        this.props.tabclick(index);
    }
    render() {
        return (
            <div className = {`tab-control`}>
                {this.props.tabname.map((item,index) => {
                    return (
                        <div key={item}
                            className = {`${index === this.state.index ? 'tab':''}`}
                            onClick = {e => this.tabclick(index)}
                            >
                            <span>{item}</span>
                        </div>
                    )
                })}
            </div>
        );
    }
}


export default Tab;