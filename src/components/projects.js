import React, { Component } from 'react';
import Projects from '../data/projects.json';

class ProjectsClass extends Component {
  render(){
    return(
      <div className="row ml-3 mr-3">
      {
        Projects.map((Projects, index) =>{
          return(

            <div className="col-md-4 col-sm-12 ">
              <h3>{Projects.title}</h3>
              <p>{Projects.content}</p>
              <img src={Projects.image} className="img-fluid" alt={Projects.title}/>

            </div>


          )
        })
      }
    </div>
    )}
}

export default ProjectsClass;
