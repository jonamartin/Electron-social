const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url = require('url')

let win 


function createWindow() {
	console.log("Abriendo ventana principal")
	win = new BrowserWindow ({width: 800, height: 600})
	win.setTitle("Social Compact")
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))
}

function openFacebook() {

	console.log("Abriendo ventana de Facebook")
	let winf = winf = new BrowserWindow ({width: 800, height: 600})	
	winf.setTitle("Facebook");
	winf.loadURL("https://facebook.com");
	winf.on("closed", () => {
		winf = null;
})
}
function openTwitter() {

	console.log("Abriendo ventana de Facebook")
	let winf = winf = new BrowserWindow ({width: 800, height: 600})	
	winf.setTitle("Facebook");
	winf.loadURL("https://twitter.com");
	winf.on("closed", () => {
		winf = null;
})
}
function openInstagram() {

	console.log("Abriendo ventana de Facebook")
	let winf = winf = new BrowserWindow ({width: 800, height: 600})	
	winf.setTitle("Facebook");
	winf.loadURL("https://instagram.com");
	winf.on("closed", () => {
		winf = null;
})
}

exports.openFacebook = openFacebook;
exports.openTwitter = openTwitter;
exports.openInstagram = openInstagram

app.on('ready', createWindow);