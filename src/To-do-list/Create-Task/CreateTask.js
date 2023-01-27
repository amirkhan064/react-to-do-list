import './CreateTask.css';

function CreateTask() {
  return (
    <div className='CreateTask'>
      <form>
        <input type='text' placeholder='Your task name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default CreateTask;
