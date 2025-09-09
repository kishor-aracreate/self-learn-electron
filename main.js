// const { app, BrowserWindow, ipcMain } = require("electron");
// const path = require("path");

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//       contextIsolation: true,
//       nodeIntegration: false,
//     },
//   });

//   ipcMain.handle("ping", () => "pong");

//   let counter = 0;
//   ipcMain.handle("update-counter", (event, arg) => {
//     if (arg === "increment") {
//       counter++;
//     } else if (arg === "decrement") {
//       counter--;
//     }
//     return counter;
//   });

//   // During development: load your local server
//   win.loadFile("index.html");

//   // Optional: open DevTools
//   win.webContents.openDevTools();
// }

// app.whenReady().then(createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });

// app.on("activate", () => {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow();
// });

const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const indexPath = path.join(__dirname, "react-app/dist/index.html");
  console.log("Loading:", indexPath);

  win.loadFile(indexPath);

  // Open DevTools for debugging
  win.webContents.openDevTools();

  ipcMain.handle("open-external-link", async (event, url) => {
    await shell.openExternal(url);
  });
}

app.whenReady().then(createWindow);
