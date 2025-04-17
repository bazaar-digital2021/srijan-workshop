import { google } from 'googleapis';

export const InsertDataIntoSheet = async (name: string, email: string, number: string, razorpay: string) => {

    try {

        if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.SPREADSHEET_ID) {
            console.log('Please set Enivorment variables');
            return ({ message: 'Missing environment variables', success: false });
        }
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Spreadsheet ID from your Google Sheet URL
        const spreadsheetId = process.env.SPREADSHEET_ID;

        // Append values to the spreadsheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:Z', // Adjust range as needed
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[name, email, number, razorpay, new Date().toLocaleString()]],
            },
        });
        if (response.status === 200) {
            return ({ message: 'Data added successfully', success: true });
        }

    } catch (error) {
        console.log('Unable to add data into sheet', error)
        return ({ message: 'Unable to add data into sheet', success: false });
    }
}