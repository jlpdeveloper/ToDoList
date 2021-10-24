import React from "react";


/*Inputs Required for this Component
 * newProjectName:String The name of the new project 
 * onClick:Function The click function to add a new project to the list
 * onChange:Function The on change for the input of the name to update the state in the parent component
 */
class AddProject extends React.Component {
    //constructor for react component
    constructor(props) {
        super(props);
        //bind the upper this (of the class) to the handle keydown function
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    /**
     * Function to handle keydown in the new to do list item name input
     * @param {event} e 
     */
    handleKeyDown(e) {
        //if the person hit enter, then we want to go ahead and fire the onclick that adds a new project
        if (e.key === 'Enter') {
            console.log('enter');
            this.props.onClick();
        }
    }
    render() {
        return (
            //we're making this a table for easy spacing
            <table>
                <tbody>
                    <tr>
                        <td>
                            
                            <input className="form-control" value={this.props.newProjectName} onChange={this.props.onChange} onKeyDown={this.handleKeyDown}></input>
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={this.props.onClick}> Add New ToDo Item</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default AddProject;