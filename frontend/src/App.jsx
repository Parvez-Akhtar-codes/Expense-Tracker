import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";


function App() {
  const refresh = () => window.location.reload();
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={refresh} />
      <ExpenseList />
    </div>
  );
}

export default App;
