//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    // for method inside an object, don't use arrow function
    // rest of the places you can use arrow function.
    getTasksToDo: function getTasksToDo() {
        const todoItems = this.tasks.filter((task) => {
            return !task.completed
        });
        return todoItems;
    }
}

console.log(tasks.getTasksToDo())