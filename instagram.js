const electron = require('electron');
const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on("ready", () => {
	mainWindow = new BrowserWindow ({width: 600, height: 400})

	mainWindow.setTitle("Instagram");
	mainWindow.loadURL("https://instagram.com");

	mainWindow.on("closed", ()=> {
		mainWindow = null;
	});

});
	