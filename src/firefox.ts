import { keybindListener } from './logic/keybindListener';

const notify = (
  name: string,
  bundle: browser.notifications.NotificationOptions
) => {
  browser.notifications.create(name, bundle).catch();
};

browser.commands.onCommand.addListener(keybindListener(notify));
