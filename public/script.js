const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const pinInput = document.getElementById("pinInput");
const confirmBtn = document.getElementById("confirmBtn");
const message = document.getElementById("message");
const confirmationCode = document.getElementById("confirmationCode");
const confirmationOptions = document.getElementById("confirmationOptions");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");
const userInfo = document.getElementById("userInfo");
const balanceInfo = document.getElementById("balanceInfo");
const historyLink = document.getElementById("historyLink");
const historyTable = document.getElementById("historyTable");
const transactionHistory = document.getElementById("transactionHistory");
const logoutBtn = document.querySelectorAll("#logoutBtn");
const amountBtn = document.getElementById("amountBtn");
const confimClass = document.getElementById("confirmClass");
const transBtn = document.getElementById("transBtn");
const amountValue = document.getElementById("amount");

let currentUser = null;
const users = [
  {
    username: "user1",
    password: "password1",
    name: "John Doe",
    balance: 5000,
    transactions: [],
    phoneNumber: "",
  },
  {
    username: "user2",
    password: "password2",
    name: "Jane Smith",
    balance: 8000,
    transactions: [],
    phoneNumber: "",
  },
];

// Login functionality
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password.");
    }
  });
}

// Logout functionality
logoutBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });
});

// ATM functionality
if (confirmBtn) {
  let cardInserted = false;

  // Simulate card insertion
  setTimeout(() => {
    message.textContent = "Please enter your PIN.";
    pinInput.disabled = false;
    confirmBtn.disabled = false;
    cardInserted = true;
  }, 1000);

  confirmBtn.addEventListener("click", () => {
    if (cardInserted && pinInput.value.trim() !== "") {
      const confirmationValue = Math.floor(100000 + Math.random() * 900000);
      confirmationCode.textContent = `Confirmation Code: ${confirmationValue}`;
      confimClass.style.display = "none";
      confirmationOptions.style.display = "block";
      console.log("comfrimation button");
    } else {
      message.textContent = "Invalid PIN. Please try again.";
    }
  });
  

  acceptBtn.addEventListener("click", () => {
    confirmationOptions.style.display = "none";
    amountBtn.style.display = "block";
  });

  transBtn.addEventListener("click", () => {
    const amount = amountValue.value;
    const transaction = {
      date: new Date(),
      type: "Withdrawal",
      amount: -amount,
      balance: currentUser.balance - amount,
    };

    currentUser.balance -= amount;
    currentUser.transactions.push(transaction);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    message.textContent = "Transaction accepted. Thank you!";
    balanceInfo.textContent = `Current Balance: $${currentUser.balance}`;
    historyLink.style.display = "block";
    clearInputs();
  });

  declineBtn.addEventListener("click", () => {
    message.textContent = "Transaction declined.";
    clearInputs();
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });

  function clearInputs() {
    pinInput.value = "";
    confirmationCode.textContent = "";
    confirmationOptions.style.display = "none";
    cardInserted = false;
    pinInput.disabled = true;
    confirmBtn.disabled = true;
  }
}

// Initialize user information
if (userInfo && balanceInfo) {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  if (storedUser) {
    currentUser = storedUser;
    userInfo.textContent = `Welcome, ${currentUser.name}`;
    balanceInfo.textContent = `Current Balance: $${currentUser.balance}`;
    historyLink.style.display = "block";
  } else {
    window.location.href = "login.html";
  }
}

// Display transaction history
if (historyTable && transactionHistory) {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  if (storedUser) {
    currentUser = storedUser;
    const transactions = currentUser.transactions;

    // Clear existing rows
    transactionHistory.innerHTML = "";

    // If there are no transactions, display a message
    if (transactions.length === 0) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 4;
      cell.textContent = "No transaction history found.";
      row.appendChild(cell);
      transactionHistory.appendChild(row);
    } else {
      // Create table rows for each transaction
      transactions.forEach((transaction) => {
        transaction.date = new Date();
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        const typeCell = document.createElement("td");
        const amountCell = document.createElement("td");
        const balanceCell = document.createElement("td");

        dateCell.textContent = transaction.date.toLocaleDateString();
        typeCell.textContent = transaction.type;
        amountCell.textContent = `$${transaction.amount}`;
        balanceCell.textContent = `$${transaction.balance}`;

        row.appendChild(dateCell);
        row.appendChild(typeCell);
        row.appendChild(amountCell);
        row.appendChild(balanceCell);

        transactionHistory.appendChild(row);
      });
    }
  } else {
    window.location.href = "login.html";
  }
}

