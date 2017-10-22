// Doing this here because you can't grab cookie info in a content_script
console.log('running in background');
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        chrome.cookies.get({
            url: 'http://replyreminder.com/',
            name: 'fbsr_167648883816027'
        }, function(cookie) {
            console.log(cookie);
        });
        chrome.cookies.get({
            url: 'https://facebook.com/',
            name: 'c_user'
        }, function(cookie) {
            console.log(cookie);
        });
        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
  });
