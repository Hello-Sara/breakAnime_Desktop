// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
const express = require("express");
const cors = require("cors");
const localServerApp = express();
const PORT = 9000;

const startLocalServer = (done) => {
    localServerApp.use(express.json({ limit: "100mb" }));
    localServerApp.use(cors());
    console.log("Starting Local Server");
    // Utilisation d'un chemin absolu pour les fichiers statiques
    localServerApp.use(express.static(path.join(__dirname, 'build')));
    
    localServerApp.listen(PORT, async () => {
      console.log("Server Started on PORT ", PORT);
      done();
    }).on('error', (err) => {
      console.error('Failed to start server:', err);
    });
  };
  
  
  function createWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
    });
  
    mainWindow.loadURL("http://localhost:" + PORT);
  }
  
  app.whenReady().then(() => {
    startLocalServer(createWindow);
    app.on("activate", function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });