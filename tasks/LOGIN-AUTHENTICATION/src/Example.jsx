import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Example extends Component {
     constructor(){
        super();
        this.state={
            counter : [1,2,3],
        };
     }
     handelIncrement = ()=>{
       this.setState(
        {
            counter:this.state.counter + 1
        }
       );
    }
    handelDecrement= ()=>{
      this.setState(
        {
            counter:this.state.counter - 1
        }
      );
      
    }
   
  render() {
    return (
      <div className='p-4 col-6 m-auto'>
        <button className='btn btn-primary btn-lg m-2 mt-0' onClick={this.handelIncrement}>
            Increment
        </button>
      <span clas4sName=''>
       {this.state.counter}
      </span>
      <button className='btn btn-primary btn-lg m-2 mt-0' onClick={this.handelDecrement}>
           Decrement
        </button>
      </div>
    )
  }
}
