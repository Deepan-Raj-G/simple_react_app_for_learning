import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ['tag1', 'tag2', 'tag3']
  // }  


  // renderTags(){
  //   if (this.state.tags.length === 0) return <p>There is no tags!</p>;

  //   return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>;
  // }

  // handleIncrement = () => {
  //   this.setState({value  : this.state.value + 1});    
  // }

 
  
  render() {
    const {children, DoDecrement, DoDelete, DoIncrement, counter} = this.props;
    return (
      <div>
        
        {children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick = {() => DoIncrement(counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={ () => DoDecrement(counter)} className="btn btn-danger btn-sm m-2">Decrement</button>
        <button  onClick ={() => DoDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
          {/* {this.state.tags.length === 0 && "Please creata a new tag"}
          {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
  }

  formatCount(){
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

}

export default Counter;
