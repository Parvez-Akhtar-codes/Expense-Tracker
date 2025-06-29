package com.example.expense_tracker.controller;

import com.example.expense_tracker.model.Expense;
import com.example.expense_tracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {

    @Autowired
    private ExpenseService service;

    @GetMapping
    public List<Expense> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Expense add(@RequestBody Expense expense) throws IOException {
        return service.add(expense);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) throws IOException {
        service.delete(id);
    }
}
