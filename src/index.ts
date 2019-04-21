import { titleCase } from 'change-case';
import { Clipboard } from 'ts-clipboard';
import { sample } from 'lodash';

import * as nouns from './words/nouns.json';
import * as adjectives from './words/adjectives.json';

type CommandType = 'generate-name';

const generateName = () => [adjectives, nouns]
  .map((list: Array<string>) => sample(list))
  .map((word: string) => titleCase(word))
  .join(' ');

const generateAndCopyName = () => {
  const name = generateName();

  Clipboard.copy(name);
  chrome.notifications.create('elodin', {
    title: 'it shall henceforth be known as',
    type: 'basic',
    message: name,
    iconUrl: './images/gnome.png'
  });
};

chrome.commands.onCommand.addListener((command: CommandType) => {
  switch (command) {
    case 'generate-name':
      generateAndCopyName();
      break;
  }
});
