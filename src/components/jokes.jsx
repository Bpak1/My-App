import React, { Component } from 'react';
import Header from './header';

class Jokes extends Component {
  state = {
    loading: true,
    joke: null
  }

  async componentDidMount(){
    const url = "https://geek-jokes.sameerkumar.website/api";
    //const url = "https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);

    this.setState ({joke:data, loading: false })
    console.log(this.state);
  }

  render(){
    return(
      <div className="App">
        <Header />
        <h1>Random Joke</h1>
        {this.state.loading || !this.state.joke ? <div>... </div> : <div>{this.state.joke}</div>}
      </div>
    );
  }
}




export default Jokes;
// API to connect https://geek-jokes.sameerkumar.website/api
