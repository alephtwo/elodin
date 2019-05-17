package_ext() {
  cd "$1"
  zip -r -FS "../../elodin-$1.zip" *
}

yarn build
(
  cd dist
  (package_ext "firefox")
  (package_ext "chrome")
)
