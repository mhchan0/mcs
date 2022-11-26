const express = require('express');
const app = express();
app.use(express.json())

const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

app.post('/google-drive/get-files', (req, res) => {
  let data = [];

  const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

  const TOKEN_PATH = path.join(process.cwd(), 'token.json');
  const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

  /**
  * Reads previously authorized credentials from the save file.
  *
  * @return {Promise<OAuth2Client|null>}
  */
  async function loadSavedCredentialsIfExist() {
    try {
      const content = await fs.readFile(TOKEN_PATH);
      const credentials = JSON.parse(content);
      return google.auth.fromJSON(credentials);
    } catch (err) {
      return null;
    }
  }

  /**
  * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
  *
  * @param {OAuth2Client} client
  * @return {Promise<void>}
  */
  async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
      type: 'authorized_user',
      client_id: key.client_id,
      client_secret: key.client_secret,
      refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
  }

  /**
  * Load or request or authorization to call APIs.
  *
  */
  async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
      return client;
    }
    client = await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
      await saveCredentials(client);
    }
    return client;
  }

  /**
  * Lists the names and IDs of up to 10 files.
  * @param {OAuth2Client} authClient An authorized OAuth2 client.
  */
  async function listFiles(authClient) {
    const drive = google.drive({version: 'v3', auth: authClient});
    const driveRes = await drive.files.list({
      pageSize: 10,
      fields: 'nextPageToken, files(id, name, createdTime, size)',
    });
    const files = driveRes.data.files;
    if (files.length === 0) {
      return;
    }

    files.map((file) => {
      data.push({id: file.id, name: file.name, date: file.createdTime, size: file.size});
    });

    res.json({message: data});
  }

  authorize().then(listFiles).catch(console.error);

});

app.post('/google-drive/create-new-folder', (req, res) => {
  const SCOPES = ['https://www.googleapis.com/auth/drive'];
  
  const TOKEN_PATH = path.join(process.cwd(), 'token.json');
  const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

  async function loadSavedCredentialsIfExist() {
    try {
      const content = await fs.readFile(TOKEN_PATH);
      const credentials = JSON.parse(content);
      return google.auth.fromJSON(credentials);
    } catch (err) {
      return null;
    }
  }

  async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
      type: 'authorized_user',
      client_id: key.client_id,
      client_secret: key.client_secret,
      refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
  }
  
  async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
      return client;
    }
    client = await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
      await saveCredentials(client);
    }
    return client;
  }

  async function createFolder(authClient) {
    const drive = google.drive({version: 'v3', auth: authClient});
    const fileMetadata = {
      name: req.body,
      mimeType: 'application/vnd.google-apps.folder'
    }

    drive.files.create({
      resource: fileMetadata,
    });
  }

  authorize().then(createFolder).catch(console.error);

});

const server = app.listen(3001);