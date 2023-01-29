import './CreateTask.css';
import React, { useState } from 'react';
function CreateTask(props) {
  const [task, setTask] = useState('');

  function handleTaskChange(event) {
    console.log('handleTaskChange =====', event);
    setTask(event.target.value);
  }

  function createTask() {
    props.getNewTask(task);
    setTask('');
  }

  return (
    <div className='CreateTask'>
      <form>
        <input
          type='text'
          value={task}
          onChange={handleTaskChange}
          placeholder='Your task name'
        />
        <button type='button' onClick={createTask}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
