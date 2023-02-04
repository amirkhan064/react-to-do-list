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

  const [editTaskInfo, setEditTaskInfo] = useState();

  function getNewTask(task, editIndex) {
    if (editIndex >= 0) {
      let temp = [...toDoListArr];
      temp[editIndex] = { name: task, status: 0 };
      setToDoListArr([...temp]);
    } else {
      setToDoListArr([...toDoListArr, ...[{ name: task, status: 0 }]]);
    }
  }

  function deleteTask(task, i) {
    let temp = [...toDoListArr];
    temp.splice(i, 1);
    setToDoListArr([...temp]);
  }

  function completeTask(task, i) {
    let temp = [...toDoListArr];
    task.status = 1;
    temp[i] = task;
    setToDoListArr([...temp]);
  }

  function getEditTaskInfo(task, i) {
    setEditTaskInfo({ ...task, ...{ index: i } });
  }

  return (
    <div className='ToDoList'>
      <CreateTask getNewTask={getNewTask} editTaskInfo={editTaskInfo} />
      <TaskList
        tasksList={toDoListArr}
        deleteTask={deleteTask}
        completeTask={completeTask}
        getEditTaskInfo={getEditTaskInfo}
      />
    </div>
  );
}

export default ToDoList;
