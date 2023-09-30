import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('backEnd', {
    greeting: () => ipcRenderer.invoke('greeting'),
});