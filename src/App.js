import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state ={
   value : "Krishna Singh",
   isInEditMode : false
  }

  changeEditeMode = () =>{
    this.setState({
      isInEditMode : !this.state.isInEditMode
    })
  }
  renderDefaultMode() {
    return <div onDoubleClick={this.changeEditeMode}>
      {this.state.value}
    </div>;
  }
updateValue = () =>{
    this.setState({isInEditMode:false,
    value: this.refs.theTextInput.value
    })
}
  renderEditMode() {
    return <div>
    {this.state.value}
    <br/>
    <div align='center'>
      <input type="text" defaultValue={this.state.value} ref="theTextInput" />
      <button onClick = {this.updateValue}>Save</button>
      </div>
      </div>;
  }

  render() {
    return this.state.isInEditMode ?
    this.renderEditMode() : this.renderDefaultMode()
    
  }

  
}

export default App;
