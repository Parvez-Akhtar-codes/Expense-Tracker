package com.example.expense_tracker.model;

public class Expense {
    private Long id;
    private String description;
    private Double amount;
    private String category;

    public Expense() {}

    public Expense(Long id, String description, Double amount, String category) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
