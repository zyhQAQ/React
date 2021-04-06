import React, { Component } from 'react';
import Homeson from './Son'
import Tab from '../Tab'
import NavBar from '../NavBar'
import NavBar2 from '../NavBar2'

class Home extends Component {
    constructor(){
        super();
        this.state = {
            num: 0,
            currentitle:"新款",
            title:['新款','精选','流行','个人']
        };
    }
    componentDidMount(){
        console.log('组件初始化');
    }
    add = () => {
        this.setState({num : this.state.num + 1});
    }
    render() {
        return (
            <div>
                <Tab tabname={this.state.title} tabclick = {(index)=>this.itemclick(index)}/>
                <div>{this.state.currentitle}</div>
                <NavBar>
                    <span>left</span>
                    <strong>center</strong>
                    <span>right</span>
                </NavBar>
                <NavBar2 leftsolt={<span>left</span>} centersolt={<strong>middle</strong>} rightsolt={<span>right</span>}>
                </NavBar2>
            </div>
        );
    }
    itemclick(index){
        console.log(index);
        this.setState({
            currentitle:this.state.title[index]
        })
    }
}

export default Home;