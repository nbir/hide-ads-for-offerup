chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.action === 'hide-ads') {
    document.querySelectorAll('#db-item-list a').forEach(item => {
      if (item.host !== 'offerup.com') {
        item.style.display = 'none';
      }
    })
  }
});
