import './CreateTask.css';
import React, { useEffect, useState } from 'react';

function CreateTask(props) {
  const [task, setTask] = useState('');
  let editIndex = props?.editTaskInfo?.index;

  function handleTaskChange(event) {
    console.log('handleTaskChange =====', event);
    setTask(event.target.value);
  }

  function createTask() {
    props.getNewTask(task, editIndex);
    setTask('');
    editIndex = null;
  }

  useEffect(() => {
    setTask(props?.editTaskInfo?.name);
  }, [props?.editTaskInfo?.name]);

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
