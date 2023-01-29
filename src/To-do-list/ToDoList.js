import CreateTask from './Create-Task/CreateTask';
import TaskList from './Task-list/TaskList';
import React, { useState } from 'react';

function ToDoList() {
  const [toDoListArr, setToDoListArr] = useState([
    { name: 'Complete tod do list design', status: 0 },
    { name: 'Solve some Maths Questions Papers.', status: 0 },
    { name: 'Visit Shuzuka house', status: 0 },
    { name: 'Stay away from Sunio.', status: 1 },
  ]);

  function getNewTask(task) {
    setToDoListArr([...toDoListArr, ...[{ name: task, status: 0 }]]);
  }

  return (
    <div className='ToDoList'>
      <CreateTask getNewTask={getNewTask} />
      <TaskList tasksList={toDoListArr} />
    </div>
  );
}

export default ToDoList;
