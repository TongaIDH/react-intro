import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodo } from './CreateTodo'
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter
        completed={3}
        total={5}
      />

      <TodoSearch
        placeholder={"Write todo here"}
      />

      <TodoList>
        <TodoItem text={"note-1"} />
        <TodoItem text={"note-2"} />
        <TodoItem text={"note-3"} />
        <TodoItem text={"note-4"} />
        <TodoItem text={"note-5"} />
      </TodoList>

      <CreateTodo />
    </div>
  );
}

export default App;
