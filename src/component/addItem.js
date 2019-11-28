import React,{Component} from 'react';
import {observer} from 'mobx-react';
import { action } from 'mobx';

@observer
class AddItemed extends Component {
	@action
	handlefinish = (index) => {
		this.props.store.finishitem(index)
	}
	render () {
		return (
			<li  onClick={this.handlefinish.bind(this,this.props.index) }  style={{fontWeight:this.props.value.finished?'bold':'normal'}}>
				{this.props.value.context}
			</li>
		)
	}
	
}

export default AddItemed