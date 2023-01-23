import "./index.css";
import TaskList from './components/Tasks/TaskList';
import EnterTask from './components/NewTask/EnterTask';


function App() {
  const tasks = [
    { 
      title: 'Math Homework', 
      due: new Date (2023, 1, 1),
    },
    {
      title: 'Email Daniel',
      due: new Date (2023, 1, 4),
    }
  ]

  return (
    <div className="App">
      <h1 className="title">To Do List</h1>
      <TaskList items={tasks}/>
      <EnterTask></EnterTask>
    </div>
  );
}

export default App;
