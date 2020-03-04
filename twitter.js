const electron = require('electron');
const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on("ready", () => {
	mainWindow = new BrowserWindow ({width: 600, height: 400})

	mainWindow.setTitle("Twitter");
	mainWindow.loadURL("https://twitter.com");

	mainWindow.on("closed", ()=> {
		mainWindow = null;
	});

});
	