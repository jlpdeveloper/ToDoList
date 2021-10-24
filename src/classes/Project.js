/*
Class to hold all important info about the ToDoList item, such as name, a primary key, and is complete
*/
class Project {
    constructor(obj = {}){
        Object.assign(this, obj);
    }
    ProjectName = '';
    IsComplete = '';
    ProjectID = 0;
}
export default Project;