// import React, { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
//  export default  class TodoListUi extends Component {
//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 {<div>
//                     <Input
//                         onChange={this.props.changeInputValue}
//                         value = {this.props.inputValue}
//                         placeholder={this.props.inputValue} style={{ width: '250px', marginRight: '10px' }} />
//                     <Button onClick={this.props.clickAdd}>增加</Button>
//                 </div>}
//                 {<div style={{ margin: '10px', width: '300px' }}>
//                     <List bordered dataSource={this.props.list}
//                         renderItem={(item, index) => <List.Item onClick={() => { this.props.delClick(index) }}>{item}</List.Item>}
//                     />
//                 </div>}
//             </div>
//         );
//     }
// }

/* 修改为无状态组件 */


const TodoListUi = (props)=> {
    return (
        <div style={{ margin: '10px' }}>
            {<div>
                <Input
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                    placeholder={props.inputValue} style={{ width: '250px', marginRight: '10px' }} />
                <Button onClick={props.clickAdd}>增加</Button>
            </div>}
            {<div style={{ margin: '10px', width: '300px' }}>
                <List bordered dataSource={props.list}
            renderItem={(item, index) => <List.Item onClick={() => { props.delClick(index) }}>{item} {index}</List.Item>}
                />
            </div>}
        </div>
    );
}

export default TodoListUi;
