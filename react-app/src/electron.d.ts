export interface IElectronAPI {
  ping: () => Promise<string>,
  updateCounter: (arg: 'increment' | 'decrement') => Promise<number>,
  openExternalLink: (url: string) => Promise<void>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
