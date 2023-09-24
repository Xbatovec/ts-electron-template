const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}
const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './../js/preload/preload.js'),
        },
    });
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname + './../../client/html/index.html'));
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};
app.on('ready', () => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//# sourceMappingURL=index.js.map