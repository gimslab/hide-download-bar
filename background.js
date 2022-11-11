chrome.action.onClicked.addListener(async (tab) => {
	chrome.downloads.setShelfEnabled(false);
	chrome.downloads.setShelfEnabled(true);
});
