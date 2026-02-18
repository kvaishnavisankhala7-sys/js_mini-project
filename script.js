let expenses = [];

function addExpense() {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Please enter both fields");
        return;
    }

    const expense = {
        name: name,
        amount: Number(amount),
        time: new Date()
    };

    expenses.push(expense);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

    displayExpenses();
}

function displayExpenses() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach(e => {
        const li = document.createElement("li");
        li.textContent = `${e.name} — ₹${e.amount}`;
        list.appendChild(li);
    });
}

function showTotal() {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    let total = 0;

    expenses.forEach(e => {
        if (now - e.time <= oneDay) {
            total += e.amount;
        }
    });

    document.getElementById("totalDisplay").innerText = "₹" + total;
}
