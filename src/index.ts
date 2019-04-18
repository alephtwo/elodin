import { titleCase } from 'change-case';
import { Clipboard } from 'ts-clipboard';
import { sample } from 'lodash';

import * as nouns from './words/nouns.json';
import * as adjectives from './words/adjectives.json';

const generateName = () => [adjectives, nouns]
  .map((list: Array<string>) => sample(list))
  .map((word: string) => titleCase(word))
  .join(' ');

browser.browserAction.onClicked.addListener(() => {
  const name = generateName();

  Clipboard.copy(name);
  browser.notifications.create('elodin', {
    title: 'elodin',
    type: 'basic',
    message: name
  });
});
