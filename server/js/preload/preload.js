"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('backEnd', {
    greeting: () => electron_1.ipcRenderer.invoke('greeting'),
});
//# sourceMappingURL=preload.js.map