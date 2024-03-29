import React, { Component } from 'react'
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 4},
        { id: 3, value: 0},
        { id: 4, value: 0}
    ]
} 

handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });


};

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  if(counters[index].value !==0 ){
  counters[index].value--;
  this.setState({counters});
  }
  else{
  alert("zeroku kela pogadhu da potta")
}
}
handleDelete = CounterId =>{
    const remain = this.state.counters.filter(c => c.id !== CounterId);
    this.setState({ counters: remain });
};

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0
        return c;
  });
  this.setState({ counters });
  };

 

  render() { 
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
      <main className='container'>
          <Counters 
          counters = {this.state.counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset = {this.handleReset}
          onDecrement ={this.handleDecrement}
          />
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;
