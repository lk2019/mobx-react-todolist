import React, {Component} from 'react';

import {observer} from 'mobx-react';

@observer
class Header extends Component {
	render () {
		return (
			  <div className="App-header">
          		<h1 className="App-title">mobx-todolist </h1>
          		<h3 className="App-subtitle">react+mobx</h3>
	          		<div className="App-display">
	          			<span>共有{this.props.store.todos.length === 0 ? "0" : this.props.store.todos.length}条</span> | 
	          			<span>已完成{this.props.store.todos.filter((item) => item.finished).length === 0 && this.props.store.todos.length === 0 ? "0" : this.props.store.todos.filter((item) => item.finished).length}条</span> | 
	          			<span>未完成{this.props.store.todos.filter((item) => !item.finished).length === 0 && this.props.store.todos.length === 0 ? "0" : this.props.store.todos.filter((item) => !item.finished).length}条</span>
	          		</div>
        		  </div>
		)
	}
}

export default Header