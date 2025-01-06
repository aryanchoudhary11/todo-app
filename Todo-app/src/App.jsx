import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

function App() {
  const todo = [
    { name: "Go to city", date: "08/01/2025" },
    { name: "Go to fare", date: "10/01/2025" },
  ];
  return (
    <center>
      <AppName />
      <AddTodo />
      <TodoItem todoItems={todo} />
    </center>
  );
}

export default App;
