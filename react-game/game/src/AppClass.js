//rcc - class component를 생성하는 키워드
import React, { Component } from 'react'
import BoxClass from './component/BoxClass'

export default class AppClass extends Component {
    constructor(props){//생성자
        super(props)

        this.state={
            counter : 0
            , value : 0
            //필요한 state를 한곳에 정리한다.
        }//생성시 state도 생성해준다.
    }

    increase = () => {//함수
        //this.setState({counter : this.state.counter + 1})
        //변경을 원하는 값을 넣어준다.
        //변경이 필요한 내용을 한번에 정의 후, 변경해준다.
        this.setState({
            counter : this.state.counter + 1
            , value : this.state.value + 1
        })
    }

    render() {
        return (
        <div>
            <div>state : {this.state.counter}</div>
            {/* 실행되지 않는다.
            <button onClick={()=>{this.increase}}>click</button>
            */}
            <button onClick={this.increase}>click</button>

            <BoxClass num={this.state.value} />
        </div>
        )
    }
}
