import './TaskList.css';
function TaskList(props) {
  let tasksList = props?.tasksList;

  function taskAction(task, type, i) {
    if (type === 1) {
      props.getEditTaskInfo(task, i);
    } else if (type === 2) {
      props.completeTask(task, i);
    } else {
      props.deleteTask(task, i);
    }
  }

  return (
    <div className='TaskList'>
      <ul>
        {tasksList.map((task, i) => (
          <li key={i}>
            {!task?.status ? (
              <span>{task?.name}</span>
            ) : (
              <span>
                <del>blue</del>
              </span>
            )}
            {task?.status ? (
              <span>
                <button onClick={() => taskAction(task, 3, i)}>❌</button>
              </span>
            ) : (
              <span>
                <button onClick={() => taskAction(task, 1, i)}>✏️</button>
                <button onClick={() => taskAction(task, 2, i)}>✔️</button>
                <button onClick={() => taskAction(task, 3, i)}>❌</button>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
