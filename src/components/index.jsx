import React, { Component } from 'react';
import Header from './header';
import ProjectsClass from './projects';

class Index extends Component {
  render(){
    return(
      <div className="App ">
        <Header />
        <div className="row ml-1 mr-1 pb-5 ">
          <div className ="col-md-8 mx-auto">

        <h1>Home</h1>
        <p>Hi,
My name is Bart Pak, i am a 31 years old Front-end developer / Ux desiger.
I have done some React tutorials over the last months and i want to dive deeper into the world of Front-end development.
Currently i am learning React but i want to learn other frameworks like Vue and Angular as well.

For the near future i am looking for a place where i can further develop my front-end development skills.</p>

          </div>
        </div>
        <ProjectsClass />
      </div>
    )
  }
}

export default Index;
