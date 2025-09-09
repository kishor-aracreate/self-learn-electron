const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  ping: () => ipcRenderer.invoke("ping"),
  updateCounter: (arg) => ipcRenderer.invoke("update-counter", arg),
  openExternalLink: (url) => ipcRenderer.invoke("open-external-link", url),
});
