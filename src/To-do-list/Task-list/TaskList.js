import './TaskList.css';
function TaskList(props) {
  let tasksList = props?.tasksList;
  return (
    <div className='TaskList'>
      <ul>
        {tasksList.map((task) => (
          <li>
            <span>{task?.name}</span>
            {task?.status ? (
              'Completed'
            ) : (
              <span>
                <button>Edit</button>
                <button>Delete</button>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
