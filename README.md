# Elodin

Elodin is a fast way of generating short names of the form `ADJECTIVE NOUN`,
which can be helpful when manually creating data for quality assurance (or any
other situation where you need a name but don't care how ridiculous it is).

## Build Instructions

Building is easy:

```bash
# With Yarn
yarn install && yarn build

# With NPM
npm install && npm run-script build
```

The resultant webextension (in its entirety) will be contained within the `dist`
directory.

## Usage

Elodin doesn't add anything to the browser's interface; users will need to map
a keybind to generate a name (default is Ctrl+E). Pressing the keybind will
copy a random name to the user's clipboard and notify them as to what name was
used.

## Contributing

1. [Fork it](https://github.com/alephtwo/elodin/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request
