import React, { Component } from 'react'
import './style/app.css'
import Projects from './compnent/Project'
import AddProject from './compnent/AddProject'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
          {
              title: 'web dev',
              category: 'developer'
          },
          {
              title: 'web design',
              category: 'designer'
          },
          {
              title: 'app dev',
              category: 'developer'
          }
      ]
    }
  }

  addProject(project) {
    let projects = this.state.projects;
      projects.push(project);
      this.setState({
          projects: projects
      })
  }
  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects}/>
        <AddProject addProject={this.addProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
