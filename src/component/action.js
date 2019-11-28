import React,{Component} from 'react';
import {observer} from 'mobx-react';
import AddItemed from "./addItem"
import { action } from 'mobx';

@observer
class Action extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			todo:this.props.store.todos
		}
	}
	

	showItem =()=> {
		this.setState({todo:this.props.store.showitem()})
	}
	
	finishitem =()=> {
		this.setState({todo:this.props.store.showfinishitem()})
	}
	
	undoneItem =()=> {
		this.setState({todo:this.props.store.undoneitem()})
	}
	
	@action
	addItem =()=> {
		this.props.store.additem(this.handleInput.current.value,this.state.finish)
		this.showItem()
		this.handleInput.current.value=""
	}
	
	handleInput = React.createRef();


	render () {
		return (
			<div className="App-action">		
				<ul className="App-action-con">
				<button onClick={this.showItem.bind(this)}>全部</button>
				<button onClick={this.finishitem.bind(this)}>已完成</button>
				<button onClick={this.undoneItem.bind(this)}>未完成</button>
				<button onClick={this.addItem.bind(this)}>添加</button>
				<input type="text"  ref={this.handleInput}  placeholder="请输入" />
				</ul>
					{this.state.todo.length>0?this.state.todo.map((value,index)=>{
						return <AddItemed key={index} index={index} value={value} store={this.props.store}></AddItemed>
					}):'暂无数据'
					}
			</div>
		)
	}
	
}



export default Action