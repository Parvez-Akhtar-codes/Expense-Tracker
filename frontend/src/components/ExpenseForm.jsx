import { useState } from "react";
import axios from "axios";

function ExpenseForm({ onAdd }) {
  const [expense, setExpense] = useState({
    description: "",
    amount: "",
    category: ""
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8080/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    if (response.ok) {
      setExpense({
        description: "",
        amount: "",
        category: "",
      });
      onAdd();
    } else {
      console.error("Failed to save expense");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


  return (
  <form
    onSubmit={handleSubmit}
    className="flex flex-col sm:flex-row gap-2 justify-center mb-6"
  >
    <input
      name="description"
      placeholder="Description"
      value={expense.description}
      onChange={handleChange}
      required
      className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-48"
    />
    <input
      name="amount"
      type="number"
      placeholder="Amount"
      value={expense.amount}
      onChange={handleChange}
      required
      className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-32"
    />
    <input
      name="category"
      placeholder="Category"
      value={expense.category}
      onChange={handleChange}
      required
      className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-32"
    />
    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full sm:w-auto"
    >
      Add
    </button>
  </form>
);

}

export default ExpenseForm;
