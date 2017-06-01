# elodin

Elodin is a fast way of generating short names of the form `ADJECTIVE NOUN`.

## Installation

Right now, you'll have to build using Crystal itself:

```sh
crystal build src/elodin.cr
```

## Usage

Once it's built, you can just invoke it as you would anything else:
```sh
./elodin
```
When combined with a clipboard manager, this becomes very powerful.
For example, with `xclip`:
```sh
./elodin | xclip -sel clip
```
And on OSX:
```sh
./elodin | pbcopy
```

## Contributing

1. [Fork it](https://github.com/alephtwo/elodin/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
