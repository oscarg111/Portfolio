import '../App.css';
import {useState} from "react"
import { Task } from './Task';

export const ToDoList = () => {
  const [ todoList, setTodoList ] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };
  const handleOnClick = () => {
    // three dots means all in list, including newTask
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    const newList = todoList.filter((task) => {
      return task.id !== id;
    })
    setTodoList(newList);
  };
  const setCompleted = (id) => {
    const newList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true};
      } else {
        return task;
      }
    })
    setTodoList(newList);
  };

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleInput} />
        <button onClick={handleOnClick}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task
           taskName={task.taskName} 
           id={task.id} 
           deleteTask={deleteTask} 
           completeTask={setCompleted} 
           completed={task.completed}
           />
        })}
      </div>
    </div>
  );

}

export default ToDoList;
