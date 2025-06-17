# 🏧 ATM Project with SMS Confirmation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-14.x+-green.svg)](https://nodejs.org/)
[![Twilio](https://img.shields.io/badge/Twilio-API-red.svg)](https://www.twilio.com/)

A secure ATM simulation project that features SMS transaction confirmations, allowing users to accept or decline transactions remotely.

![ATM Demo](https://via.placeholder.com/800x400?text=ATM+Project+Demo)

## ✨ Features

- 🔐 Secure user authentication
- 📱 SMS transaction confirmations
- 🧾 Transaction history tracking
- 🔄 Real-time transaction status updates
- 🛡️ Two-factor authentication via SMS

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Twilio](https://www.twilio.com/) account with:
  - Account SID
  - Auth Token
  - Twilio phone number

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Atm-transaction-alert.git
   cd Atm-transaction-alert
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Twilio credentials:
   - Open `server.js` and `public/script.js`
   - Replace the following placeholders:
     ```javascript
     const ACCOUNT_SID = 'YOUR_ACCOUNT_SID';
     const AUTH_TOKEN = 'YOUR_AUTH_TOKEN';
     const TWILIO_PHONE = 'YOUR_TWILIO_PHONE_NUMBER';
     ```

4. Update test user phone numbers in `public/script.js`:
   ```javascript
   const users = [
     { username: 'user1', password: 'password1', phone: '+1XXXXXXXXXX' },
     { username: 'user2', password: 'password2', phone: '+1XXXXXXXXXX' }
   ];
   ```

## 🖥️ Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Login with test credentials:
   | Username | Password |
   |----------|----------|
   | user1    | password1|
   | user2    | password2|

4. Using the ATM interface:
   - Wait for card simulation (2 seconds)
   - Enter PIN and click "Confirm"
   - Receive confirmation code on screen
   - Check SMS on registered phone

5. Complete transaction:
   - Reply "ACCEPT" to approve
   - Reply "DECLINE" to cancel

6. View transaction history through the interface link

## 📁 Project Structure

```
Atm-transaction-alert/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
└── README.md
```

## ⚠️ Disclaimer

This project is for demonstration purposes only. It doesn't include actual banking functionality or financial transaction processing.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
