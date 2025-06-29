package com.example.expense_tracker.service;

import com.example.expense_tracker.model.Expense;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.*;

@Service
public class ExpenseService {

    private final File file = new File("expenses.json");
    private final ObjectMapper mapper = new ObjectMapper();
    private List<Expense> expenses = loadExpenses();

    private List<Expense> loadExpenses() {
        if (!file.exists()) {
            return new ArrayList<>();
        }
        try {
            return Arrays.asList(mapper.readValue(file, Expense[].class));
        } catch (IOException e) {
            return new ArrayList<>();
        }
    }

    private void saveExpenses() throws IOException {
        mapper.writerWithDefaultPrettyPrinter().writeValue(file, expenses);
    }

    public List<Expense> getAll() {
        return expenses;
    }

    public Expense add(Expense expense) throws IOException {
        if (expense.getAmount() == null || expense.getAmount() < 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        expense.setId(new Random().nextLong());
        expenses.add(expense);
        saveExpenses();
        return expense;
    }

    public void delete(Long id) throws IOException {
        expenses.removeIf(e -> Objects.equals(e.getId(), id));
        saveExpenses();
    }
}
