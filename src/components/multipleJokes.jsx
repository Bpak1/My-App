import React from "react";
import ReactDOM from "react-dom";
import Header from './header';


class MultipleJokes extends React.Component {
  state = {
    loading: true,
    joke: []
  };

  componentDidMount = async () => {
    const url = "https://api.icndb.com/jokes/";
    const response = await fetch(url);

    const data = await response.json();

    this.setState({ loading: false, joke: data.value });
  };

  render() {
    console.log(this.state.joke);
    if (!this.state.joke.length) {
      return <div> No jokes here </div>;
    }

    return (
      <div className="App ">
      <Header />
      <div className="container">
        <div className="row">
        <div className="col-md-12">
          <h1>Chuck Norris Jokes</h1>
          <ol className="jokes">
            {this.state.joke.map(item => (
              <li key={item.id}><p>{item.joke}</p></li>
            ))}
            </ol>
            </div>
            </div>
        </div>
      </div>

    );
  }
}



export default MultipleJokes;
