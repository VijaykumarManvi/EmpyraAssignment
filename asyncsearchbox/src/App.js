import React from 'react';
const axios = require("axios");
function throttle(fn, time){
  let throttled;
  return function(){
  if(!throttled){
  fn.apply(this, arguments)
  throttled = true;
  }
  setTimeout(function(){
  throttled = false;
  },time)
  }
  }
class aysynSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            results: []
        }
       this.throttled = throttle(this.handleInput, 2000)
    }
    handleInput = evt => {
      console.log('handleInput ')
        axios.get('https://jsonplaceholder.typicode.com/users')
      .then( (response) => {
        this.setState({ results: response.data });
      })
      .catch((ex) => {
        console.log("ERROR: " + ex);
      });
    }
     
    render() {
        return (
            <div>
              <h1>Sample search Box</h1>
            <input placeholder="Enter your search.." onChange={this.throttled} />
            {this.state.results.length > 0  ? <div>
                {this.state.results.map((item,index) =>{
                  return (
                  <div key={index}>
                    <div>{item.id}</div>
                  </div>)
                  })}
            </div> : ''}
            </div>
        );
    }
}
export default aysynSearch;