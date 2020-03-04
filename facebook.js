const electron = require('electron');
const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on("ready", () => {
	mainWindow = new BrowserWindow ({width: 600, height: 400})

	mainWindow.setTitle("Facebook");
	mainWindow.loadURL("https://facebook.com");

	mainWindow.on("closed", ()=> {
		mainWindow = null;
	});

});
	