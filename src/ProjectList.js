import ProjectItem from './ProjectItem';
import React from 'react';
/** List of all the Todo Items
 *  Inputs:
 *  projects:Project[] List of all ToDo items
 *  UpdateCompletionFunction:Function Function that is passed through to update the is Complete status for a todo item in the parent state
 *  DeleteClick:Function  Function that is passed through to delete a todo item
 */
class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Project Name
                        </th>
                        
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                {this.props.projects.length > 0 &&
                    <tbody>
                        {this.props.projects.map((proj, i) => {

                            return (<ProjectItem Project={proj} UpdateCompletionFunction={this.props.UpdateCompletionFunction} DeleteClick={this.props.DeleteProjectClick} key={proj.ProjectID} />)
                        })}
                    </tbody>
                }
                {this.props.projects.length === 0 &&
                    <tbody>
                        <tr><td>There are no todo items</td></tr>
                    </tbody>}
            </table>
        );
    }
}
export default ProjectList;