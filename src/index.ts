const openMDN = () => {
  browser.tabs.create({
    url: 'https://developer.mozilla.org'
  }).catch();
};

browser.browserAction.onClicked.addListener(openMDN);
