# elodin

Elodin is a fast way of generating short names of the form `ADJECTIVE NOUN`.

## Installation

Either build it using `cargo` or grab the latest release binary from
[the releases page](https://github.com/alephtwo/elodin/releases/latest).

## Web Demo

A limited feature set is [available online!](https://alephtwo.github.io/elodin/)

## Usage

Primarily, `elodin` is useful for generating names like so:

```sh
$ elodin
Atmospherical Sheik
```

However, it can also be used to generate slugs:

```sh
$ elodin -s
unthought-intrusion
```

### Clipboard

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
