const express = require("express");
const app = express();
require('./model/mongoConfig')
require('./model/configDB')
const routes =  require('./routes/userRouter')

const port = 8000;
app.use('/',routes)


app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);









// const fs = require('fs');
// const readline = require('readline');
// const { google } = require('googleapis');
// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// const TOKEN_PATH = 'token.json';

// fs.readFile('', (err, content) => {
//     if (err) return console.log('Error loading client secret file:', err);
//     authorize(JSON.parse(content), listMajors);
//   });

//   function authorize(credentials, callback) {
//     const { client_secret, client_id, redirect_uris } = credentials.installed;
//     const oAuth2Client = new google.auth.OAuth2(
//       client_id,
//       client_secret,
//       redirect_uris[0]
//     );

//     fs.readFile(TOKEN_PATH, (err, token) => {
//       if (err) return getNewToken(oAuth2Client, callback);
//       oAuth2Client.setCredentials(JSON.parse(token));
//       callback(oAuth2Client);
//     });
//   }

//   function authorize(credentials, callback) {
//     const { client_secret, client_id, redirect_uris } = credentials.installed;
//     const oAuth2Client = new google.auth.OAuth2(
//       client_id,
//       client_secret,
//       redirect_uris[0]
//     );

//     fs.readFile(TOKEN_PATH, (err, token) => {
//       if (err) return getNewToken(oAuth2Client, callback);
//       oAuth2Client.setCredentials(JSON.parse(token));
//       callback(oAuth2Client);
//     });
//   }

//   function listMajors(auth) {
//     const sheets = google.sheets({ version: 'v4', auth });
//     sheets.spreadsheets.values.get(
//       {
//         spreadsheetId: '1U27MYTXyOamZLjjsCxT8ZtvGnJrSOX1LDNLGA3HnUVo',
//         range: 'New Hupe us 2!A2:E',
//       },
//       (err, res) => {
//         if (err) return console.log('The API returned an error: ' + err);
//         const rows = res.data.values;
//         if (rows.length) {
//           console.log('Name, Major:');
//           // Print columns A and E, which correspond to indices 0 and 4.
//           rows.map((row) => {
//             console.log(`${row[0]}, ${row[4]}`);
//           });
//         } else {
//           console.log('No data found.');
//         }
//       }
//     );
//   }
