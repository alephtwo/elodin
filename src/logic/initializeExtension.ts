import { Clipboard } from 'ts-clipboard';
import { generateName } from './generateName';
type CommandType = 'generate-name';

type BundleOpts = browser.notifications.NotificationOptions
                  | chrome.notifications.NotificationOptions;

interface InitializeOptions {
  notify: (name: string, bundle: BundleOpts) => void;
  addListener: (listener: Function) => void;
}

export const initializeExtension = (options: InitializeOptions) => {
  options.addListener(keybindListener(options.notify));
};

const keybindListener = (notify: Function) => (command: CommandType) => {
  switch (command) {
    case 'generate-name':
      generateCopyNotify(notify);
      break;
  }
};

const generateCopyNotify = (notify: Function) => {
  const name = generateName();
  Clipboard.copy(name);
  notify('elodin', {
    title: 'it shall henceforth be known as',
    type: 'basic',
    message: name,
    iconUrl: './images/gnome.png'
  });
};
