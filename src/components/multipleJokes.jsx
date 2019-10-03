import React, { Component } from 'react';
import Header from './header';


class MultipleJokes extends Component {
  state = {
    loading: true,
    joke: []
  }
  //https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json


//  const [data, setData] = useState([]);

async componentDidMount(){
  //const url = "https://geek-jokes.sameerkumar.website/api";
  //const url = "https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json";
  const url = "http://api.icndb.com/jokes/";
  const response = await fetch(url);
  const data = await response.json();
  //const result = data.value[1].joke;
  //gebruik de map functie om meerdere resutls te krijgen  https://medium.com/javascript-in-plain-english/how-to-loop-through-arrays-in-react-3eaa8a14445
  //console.log(result);
  this.setState ({loading: false, joke:data});
  //console.log("joke");
  console.log(this.state.joke.value);


}



  render(){

    if(!this.state.joke){
      return <div> No jokes here </div>
    }


    return(
        <div className="App">
        <Header />
        <h2> multple Jokes</h2>
       {
          //this.state.joke.map(data=>(
          //  <div>
          //  <h1> test</h1>
          //  </div>
          //))
        }

        </div>

    //  {this.state.loading || !this.state.joke ? <div>... </div> : <div>{this.state.joke}</div>}

    );
  }
}

export default MultipleJokes;
