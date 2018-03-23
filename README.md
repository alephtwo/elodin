# elodin

Elodin is a fast way of generating short names of the form `ADJECTIVE NOUN`.

## Build

```sh
$ cargo build
```

## Usage

```sh
$ elodin
```

## Clipboard

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
5. Create a new pull request
