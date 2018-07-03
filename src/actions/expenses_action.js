import uuid from 'uuid';

export const addExpense = ({
  note = "",
  name = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    name,
    note,
    amount,
    createdAt
  }
});

// CREATE REMOVE EXPENSE ACTION
 export const removeExpense = id => ({
  type: "REMOVE_EXPENSE",
  id
});

// CREATE EDIT EXPENSET ACTION

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
