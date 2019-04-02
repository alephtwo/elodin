import './index.css'
import * as _ from 'lodash'
import * as changeCase from 'change-case'
import { Clipboard } from 'ts-clipboard'
import * as nouns from './words/nouns.json'
import * as adjectives from './words/adjectives.json'

declare global {
  interface Window { generate: Function }
}

window.generate = () => {
  const word = makeWord()
  Clipboard.copy(word)

  const button = document.getElementById('generate-button')
  if (button) {
    button.textContent = word
  }
}

const makeWord = (): string => [adjectives, nouns]
  .map((list: Array<string>) => _.sample(list))
  .map((word: string) => changeCase.titleCase(word))
  .join(' ');
