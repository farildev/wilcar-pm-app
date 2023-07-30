const { app, BrowserWindow, Menu } = require('electron');
const { exec } = require('child_process');
const path = require('path');

let mainWindow;
let reactAppProcess = null;
let consoleOutput = '';


function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    icon: path.join(__dirname, 'wilcar.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (!reactAppProcess)
    configureReactApp();

  retryLoadURL('http://localhost:3000', 50, 3000);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.setFullScreen(true);
    mainWindow.webContents.send('console-output', consoleOutput);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function createCustomMenu() {
  const template = [
    
  ];

  const customMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(customMenu);
}

async function retryLoadURL(url, maxRetries, timeout, currentRetry = 0) {
  try {
    await mainWindow.loadURL(url);
  } catch (error) {
    if (currentRetry < maxRetries) {
      consoleOutput += `Loading URL failed, retrying (${currentRetry + 1} of ${maxRetries})`;
      setTimeout(() => retryLoadURL(url, maxRetries, timeout, currentRetry + 1), timeout);
    } else {
      consoleOutput += `Failed to load URL after ${maxRetries} retries.`;
      consoleOutput += `Failed to load URL after ${maxRetries} retries.`;
    }
  }
}

function configureReactApp() {
  const commands = [
    'npm install',
    'json-server --watch db.json --port 3001',
    'npm run start'
  ];

  const reactAppPath = path.join(__dirname, '..', 'wilcar.web');

  const promises = commands.map((command) => {
    return new Promise((resolve) => {
      exec(command, { cwd: reactAppPath }, (error, stdout, stderr) => {
        if (error) {
          consoleOutput += `Command Error: ${error.message}\n`;
        } else {
          consoleOutput += `Command Output: ${stdout}\n`;
        }
        resolve();
      });
    });
  });

  Promise.all(promises).then(() => {
    mainWindow.webContents.send('console-output', consoleOutput);
  });
}

app.on('ready', () => {
  createCustomMenu();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

