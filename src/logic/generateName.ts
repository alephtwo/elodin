import { headerCase } from 'change-case';
import { sample } from 'lodash';

import * as nouns from '../words/nouns.json';
import * as adjectives from '../words/adjectives.json';

export const generateName = () => [adjectives, nouns]
  .map((list: Array<string>) => sample(list))
  .map((word: string) => headerCase(word))
  .join(' ');
