import './ProjectItem.css'
import { XSquare } from 'react-bootstrap-icons';
import React from 'react';
/** An individual table row for a todo item
 * Inputs:
 * Project:Project The project class passed in
 * DeleteClick:Function function to delete this todo item
 * UpdateCompletionFunction:Function Function to update completion status of the item in the parent state
 * @param {*} props 
 * @returns JSX For an individual todo list item
 */
function ProjectItem(props){
    return(
        <tr>
            
            <td>
            <input type="checkbox" name={props.Project.ProjectID} checked={props.Project.IsComplete} onChange={ () => { props.UpdateCompletionFunction(props.Project.ProjectID)} } />
                <label className={props.Project.IsComplete ? 'is-complete pointer': 'pointer'} htmlFor={props.Project.ProjectID} onClick={() => { props.UpdateCompletionFunction(props.Project.ProjectID)}}>{props.Project.ProjectName} </label>
            </td>
            <td>
                <XSquare className="pointer" onClick={() => { props.DeleteClick(props.Project.ProjectID); }} />    
            </td>
        </tr>
    );
}

export default ProjectItem