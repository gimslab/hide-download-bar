chrome.browserAction.onClicked.addListener(function(tab){

	chrome.downloads.setShelfEnabled(false);
	chrome.downloads.setShelfEnabled(true);

});

