/**
 * Created by darylschmoldt on 5/23/16.
 */


const electron = require('electron');
// Module to control application life.
const {app} = electron;
// Module to create native browser window.
const {BrowserWindow} = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({width: 818, height: 536});

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    win.webContents.openDevTools();



  
    
    
    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
    app.quit();
}
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
    createWindow();
}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.





console.log('the main event');

var io = require('socket.io-client');
var serverUrl = 'http://localhost:8080/ns';
var conn = io.connect(serverUrl);


console.log('serverUrl : ' + serverUrl);
console.log('conn : ' + conn);

var p1 = 'hello';
conn.emit('call', p1, function(resp, data) {
    console.log('server sent resp code ' + resp);
});

conn.on('error', function(){
    console.log('wah wha');
});