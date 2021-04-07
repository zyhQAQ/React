import React, { Component } from 'react';
import Homeson from './Son'
import Tab from '../Tab'
import Profile from '.././Profile'
class Home extends Component {
    constructor(){
        super();
        this.state = {
            num: 0,
            currentitle:"新款",
            title:['新款','精选','流行']
        };
    }
    componentDidMount(){
        console.log('组件初始化');
    }
    add = () => {
        this.setState({num : this.state.num + 1});
        console.log('当前的值为'+this.state.num);
        //为了避免setstate的合并  可以使用这种回调记进行累加
        
        this.setState((prestate, props) => {
            return {
                num: prestate.num + 1,
            }
        });

    }
    render() {
        return (
            <div>
                <Tab tabname={this.state.title} tabclick = {(index)=>this.itemclick(index)}/>
                <div>{this.state.currentitle}</div>
                <Profile></Profile>
                <div>{this.state.num}</div>
                <Homeson onClick={this.add}></Homeson>
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