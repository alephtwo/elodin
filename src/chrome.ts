import { keybindListener } from './logic/keybindListener';

const notify = (
  name: string,
  bundle: chrome.notifications.NotificationOptions
) => {
  chrome.notifications.create(name, bundle);
};

chrome.commands.onCommand.addListener(keybindListener(notify));
