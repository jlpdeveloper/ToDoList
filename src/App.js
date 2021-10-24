import './App.css';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import React from 'react';
import Project from './classes/Project';

/** Master app component
 * 
 */
class App extends React.Component {
  //Max Primary key for the todo items. This wouldn't be necessary with api/db support
  MaxProjectID = 2;
  constructor(props) {
    super(props);
    //create the state object for this component. Preset with mock todo items.
    //also contains the newProject name for the add component
    this.state = {
      projects: [
        new Project({ ProjectName: 'My New Project', ProjectID: 1, IsComplete: true }), 
        new Project({ ProjectName: 'Project 2', ProjectID: 2, IsComplete: false })
      ],
      newProjectName: ''
    };
    //register all functions to bind this properly
    this.addNewProject = this.addNewProject.bind(this);
    this.onNewProjectUpdateValue = this.onNewProjectUpdateValue.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.markProjectAsComplete = this.markProjectAsComplete.bind(this);
  }
  /**
   * Function to update the state from the addProject component for the new Project name
   * @param {*} event The event of the change event
   */
  onNewProjectUpdateValue(event) {
    this.setState({ newProjectName: event.target.value });
  }
  /**
   * Function to create a new todo item (project) and add to the state
   */
  addNewProject() {
    //create a copy of the state projects
    var projects = this.state.projects.slice();
    //add a new todo item to the array
    projects.push(new Project({ ProjectName: this.state.newProjectName, ProjectID: ++this.MaxProjectID, IsComplete: false }));
    //update the state with the new array and clear out the newProjectName
    this.setState({ projects: projects, newProjectName: '' });
  }
  /**
   * Delete a todo item
   * @param {*} ProjectID ID of the project to delete
   */
  deleteProject(ProjectID) {
    //make a copy of the states project array
    let projects = this.state.projects.slice();
    //find the Project with the matching primarky key
    let projectToDie = projects.find(p => p.ProjectID === ProjectID);
    //confirm that we really want to delete this object
    if (window.confirm('Are you sure you wish to delete ' + projectToDie.ProjectName + '?')) {
      //if yes, filter it out of the list and update the state
      projects = projects.filter(p => p.ProjectID !== ProjectID);
      this.setState({ projects: projects });
    }
  }
  /**
   * Updates a todo item as Complete
   * @param {*} ProjectID ProjectID of the project to mark as completed
   */
  markProjectAsComplete(ProjectID) {
    //make a copy of the state's project array
    let projects = this.state.projects.slice();
    //loop through all the projects, update is complete to its inverse for the projectID sent in
    projects.forEach(p => {
      if (p.ProjectID === ProjectID) {
        p.IsComplete = !p.IsComplete;
      }
    });
    //update the state
    this.setState({ projects: projects });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo List</h1>
          <AddProject onClick={this.addNewProject} onChange={this.onNewProjectUpdateValue} newProjectName={this.state.newProjectName}></AddProject>
          <ProjectList projects={this.state.projects} DeleteProjectClick={this.deleteProject} UpdateCompletionFunction={this.markProjectAsComplete}></ProjectList>
        </header>
      </div>
    );
  }
}

export default App;
