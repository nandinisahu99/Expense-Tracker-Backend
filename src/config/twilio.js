import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;  
const authToken = process.env.TWILIO_AUTH_TOKEN;    
const client = twilio(accountSid, authToken);


export const sendSMS = (to, message) => {
    client.messages.create({
        body: message,
        to: to, 
        from:  +17194198579
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error(error));
};
