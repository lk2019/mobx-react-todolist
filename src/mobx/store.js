import {observable,action} from 'mobx';



class Store {
	
	//用来存放初始化数据
	@observable todos = [];
	


	
	@action showfinishitem(){

		return this.todos.filter(value => {
			return value.finished===true;
		});
	}
	
	//点击添加按键,添加方法
	@action addpage(i){
		this.status = "block";
	}
	
	@action additem(context,finished=false){
		let obj={
			context:context,
			finished:finished
		};
		this.todos.push(obj);
	}
	
	
	@action  showitem(){
		//数据整合后去重
		return this.todos.filter(() => {return true});
	}
	
	@action finishitem(index){
		this.todos[index].finished=true;
	}
	
	@action undoneitem(){
		return this.todos.filter(value => {
			return value.finished===false;
		});
		
	}
	
	@action searchitem(index){
		return this.todos[index].finished;
	}
	
	
	
}


const store = new Store();
export default store
