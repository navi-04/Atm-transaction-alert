function sendMessage(){
    const accountSid = "";
    const authToken = "";

const client = require('twilio')(accountSid, authToken);
let numbers = ['']
numbers.forEach(element => {
  client.messages.create({
    to: element,
    from: '+18315083621',
    body: 'you have entered pin in the atm...whtether to continue the transaction or to decline it (note: please answer with continue or decline): '
})
.then((message)=>console.log(message.sid));
});
}

sendMessage();

function sendDeclineMessage() {
  const accountSid = "";
  const authToken = "";

  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      to: "",
      from: "",
      body: "you have choosed decline so your are logged out!!! ",
    })
    .then((message) => console.log(message.sid));
}

sendDeclineMessage();


