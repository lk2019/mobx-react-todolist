import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Header from './component/header';
import Action from './component/action';
import store from './mobx/store';

@observer
class App extends Component {
  render(){
      return (
        <div className="App">
          <Header store={store} />
            <div className="App-inner">
              <Action store={store} />
            </div>
       </div>
  );
  }

}

export default App;
