chrome.tabs.getSelected(null, tab => {
  if (tab.url.includes('offerup.com/search')) {
    document.querySelector('.hide-ads').addEventListener('click', () => {
      chrome.tabs.sendMessage(tab.id, { action: 'hide-ads' });
    });
  }
});
