import React, { Component } from 'react'

const UserContext = React.createContext({
    nickname:'shangxaiwen',
    level:'lv'
})
const ThemContext = React.createContext({
    color:'red',
    size:'8px'
})

// class ProfileHeader extends Component{
//     render(){
//         // const props = this.props;
//         console.log("context",this.context)
//         return (
//             <div>
//                 <h2>用户昵称：{this.context.nickname}</h2>
//                 <h2>用户等级：{this.context.level}</h2>
//             </div>
//         )
//     }
// }

function ProfileHeader (props){
    return (
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <ThemContext.Consumer>
                            {
                                themvalue => {
                                    return (
                                        <div>
                                            <h2>用户昵称：{value.nickname}</h2>
                                            <h2>用户等级：{value.level}</h2>
                                            <span style={{color:themvalue.color,fontSize:themvalue.size}}>用户颜色等级</span>
                                        </div>
                                    )
                                }
                            }
                        </ThemContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    )
}   

// ProfileHeader.contextType = UserContext;  //只对class  命名方式有用
// ProfileHeader.contextType = ThemContext;
function ProfileFun (props){
    return (
        <div>
            {/* <ProfileHeader {...props}></ProfileHeader> */}
            <ProfileHeader></ProfileHeader>
            <h2>设置</h2>
            <h2>设置</h2>
            <h2>设置</h2>
            <h2>设置</h2>
            <h2>设置</h2>
        </div>
    )
}
export default class index extends Component {
    constructor(){
        super();
        this.state = {
            nickname:"nihao",
            level:"21"
        }
    }
    render() {
        const state = this.state;
        const themastate = {
            color:'red',
            size:'2px'
        }
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <ThemContext.Provider value={themastate}>
                        <ProfileFun></ProfileFun>
                    </ThemContext.Provider>
                </UserContext.Provider>
                <ProfileFun></ProfileFun>

            </div>
        )
    }
}
