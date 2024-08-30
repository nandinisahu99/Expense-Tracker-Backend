import cron from 'node-cron';
import { checkTransactionsForToday } from '../model/repo.js';
import { sendSMS } from './twilio.js';

// Schedule the task to run every 5 minutes
export const cronSchedular=(()=>{
    cron.schedule('0 0 * * *', () => {
    checkForTransactionsAndSendReminder();
})
});

const checkForTransactionsAndSendReminder = async () => {
    const hasTransactionsToday = await checkTransactionsForToday();  
    
    if (!hasTransactionsToday) {
        sendSMS('+916204269486', 'No transactions today. Please update your expense tracker, If you had any Expenses or Income.');
    }
};
