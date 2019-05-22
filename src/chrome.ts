import { initializeExtension } from './logic/initializeExtension';

initializeExtension({
  notify: (name: string, bundle: chrome.notifications.NotificationOptions) => {
    chrome.notifications.create(name, bundle);
  },
  addListener: (listener: any) => {
    chrome.commands.onCommand.addListener(listener);
  }
});
