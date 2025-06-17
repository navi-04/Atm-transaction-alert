const express = require('express');
const app = express();
const twilio = require('twilio');
const path = require('path');

// Twilio credentials (replace with your own)
const accountSid = '';
const authToken = '';
const twilioPhoneNumber = '';

// Initialize Twilio client
const client = new twilio(accountSid, authToken);

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Handle incoming SMS messages
// Handle incoming SMS messages
app.post('/sms', (req, res) => {
    const twiml = new twilio.twiml.MessagingResponse();
    const body = req.body.Body.toUpperCase();
    const from = req.body.From;

    if (body === 'ACCEPT') {
        // Handle accepted transaction
        console.log(`Transaction accepted by ${from}`);
        
        // Send an SMS response to the user
        client.messages
            .create({
                body: 'Your transaction has been accepted.',
                from: twilioPhoneNumber,  // Your Twilio phone number
                to: from  // The phone number of the user who sent the SMS
            })
            .then(message => console.log('SMS sent:', message.sid))
            .catch(error => console.error('Error sending SMS:', error));
    }
    
    // Send a response to acknowledge the incoming SMS
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});
