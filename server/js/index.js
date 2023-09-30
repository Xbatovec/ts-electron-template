"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
// module template (exported to CommonJS - require)
const hello_js_1 = __importDefault(require("./hello.js"));
// execute one of functions from imported class
console.log('1:', hello_js_1.default.formal());
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    electron_1.app.quit();
}
const createWindow = () => {
    // Create the browser window.
    const mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path_1.default.join(__dirname, './../js/preload/preload.js'),
        },
    });
    // and load the index.html of the app.
    mainWindow.loadFile(path_1.default.join(__dirname + './../../client/html/index.html'));
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};
electron_1.app.on('ready', () => {
    createWindow();
    electron_1.ipcMain.handle('greeting', () => hello_js_1.default.informal());
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//# sourceMappingURL=index.js.map