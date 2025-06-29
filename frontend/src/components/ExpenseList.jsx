import { useEffect, useState } from "react";
import axios from "axios";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = () => {
    axios.get("http://localhost:8080/api/expenses").then((res) => setExpenses(res.data));
  };

  const deleteExpense = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/expenses/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setExpenses(expenses.filter((e) => e.id !== id));
    } else {
      console.error("Failed to delete expense");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


useEffect(() => {
  fetch("http://localhost:8080/api/expenses")
    .then((res) => res.json())
    .then((data) => setExpenses(data))
    .catch((err) => console.error(err));
}, []);


  return (
  <div className="space-y-2">
    <h2 className="text-xl font-medium mb-2">Expenses</h2>
    <ul className="space-y-2">
      {expenses.map((e) => (
        <li
          key={e.id}
          className="flex justify-between items-center border border-gray-200 rounded-md px-4 py-2 shadow-sm"
        >
          <span>
            {e.description} – ${e.amount} ({e.category})
          </span>
          <button
            onClick={() => deleteExpense(e.id)}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

}

export default ExpenseList;
