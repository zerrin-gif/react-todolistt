const todoList = [
  {
    title: 'Get a shopping cart',
    completed: true
  },
  {
    title: 'Buy a bottle of milk',
    completed: true
  },
  {
    title: 'Get some syntetic sugar',
    completed: false
  },
  {
    title: 'Pay them all',
    completed: false
  }
]

// let isCompleted = "";
// if(todoObject.completed) {
//   isCompleted = 'task-completed';
// }

function completeTask(e) {
  const itemText = e.target.parentElement.querySelector('.todo-item-text');
  if(itemText.classList.contains("task-completed")){
    itemText.classList.remove("task-completed")
  } else {
    itemText.classList.add("task-completed")
  } 
}

const tasks = todoList.map((todoObject,index) => {
  return (
    <div key={'task_' + index}>
      <input className="complete-item" type="checkbox" defaultChecked={todoObject.completed} onClick={completeTask}/>
      <span className={(todoObject.completed && 'task-completed') + ' todo-item-text'}>{todoObject.title}</span>
      <input type="text" className="todo-item-input update-action-group" value={todoObject.title} hidden/>
      <span className="edit-item edit-action-group">(edit)</span>
      <span className="remove-item edit-action-group">(remove)</span>
      <span className="update-item update-action-group" hidden>(save)</span>
      <span className="cancel-item update-action-group" hidden>(cancel)</span>
    </div>
  )
});

ReactDOM.render(
  <ul>{tasks}</ul>,
  document.getElementById('root')
);