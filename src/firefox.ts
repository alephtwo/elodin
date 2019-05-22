import { initializeExtension } from './logic/initializeExtension';

initializeExtension({
  notify: (name: string, bundle: browser.notifications.NotificationOptions) => {
    browser.notifications.create(name, bundle).catch();
  },
  addListener: (listener: any) => {
    browser.commands.onCommand.addListener(listener);
  }
});
