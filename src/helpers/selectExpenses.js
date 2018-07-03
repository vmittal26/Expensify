export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
      .filter(expense => {
        const startDateCriteria =
          typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateCriteria =
          typeof endDate !== "number" || expense.createdAt <= endDate;
        const textCriteria = expense.name
          .toLowerCase()
          .includes(text.toLowerCase());
        return startDateCriteria && endDateCriteria && textCriteria;
      })
      .sort((a, b) => {
        if (sortBy === "date") {
          return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === "amount") {
          return a.amount < b.amount ? 1 : -1;
        }
      });
  };