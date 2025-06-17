# ATM Project with SMS Confirmation

This is a simple ATM project that simulates an ATM interface, allowing users to perform transactions and receive SMS confirmations with options to accept or decline the transaction.

## Prerequisites

- Node.js installed on your machine
- A Twilio account with your account SID, auth token, and a Twilio phone number

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Replace the placeholders for `YOUR_ACCOUNT_SID`, `YOUR_AUTH_TOKEN`, and `YOUR_TWILIO_PHONE_NUMBER` in the `server.js` and `public/script.js` files with your actual Twilio credentials and phone number.
5. Replace the dummy phone numbers in the `users` array in `public/script.js` with actual phone numbers in the correct format (e.g., +1xxxxxxxxxx for US/Canada numbers).

## Running the Project

1. Start the server by running `npm start` in your terminal.
2. Open a web browser and navigate to `http://localhost:3000`.
3. The login page will be displayed. Use the following credentials to log in:
   - Username: user1, Password: password1
   - Username: user2, Password: password2
4. Once logged in, you will be redirected to the ATM interface.
5. Simulate card insertion (after 2 seconds), enter a PIN, and click the "Confirm" button.
6. A confirmation code will be displayed on the screen, and an SMS will be sent to the user's phone number with the confirmation code and instructions to reply with "ACCEPT" or "DECLINE".
7. Reply to the SMS with "ACCEPT" or "DECLINE" to complete or cancel the transaction, respectively.
8. The server will handle the user's response and log the appropriate message to the console.
9. You can view the transaction history by clicking the "View Transaction History" link on the ATM interface.

Note: This project is for demonstration purposes only and does not include actual account or transaction processing functionality.