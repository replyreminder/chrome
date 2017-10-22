// Doing this here because you can't grab cookie info in a content_script
console.log('running in background');
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var authtoken = '';
        var guid = '';

        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");

        // Callback hell - this should be cleaned up at some point
        chrome.cookies.get({
            url: 'https://facebook.com/',
            name: 'c_user'
        }, function(cookie) {
            console.log(JSON.stringify(cookie));
            console.log(cookie.value);
            guid = cookie.value;

            chrome.cookies.get({
                url: 'http://replyreminder.com/',
                name: 'fbsr_167648883816027'
            }, function(cookie) {
                console.log(JSON.stringify(cookie));
                console.log(cookie.value);
                authtoken = cookie.value;

                if (request.greeting == "cookiedata") {
                    console.log('send response', {
                        authtoken: authtoken,
                        guid: guid
                    });
                    sendResponse({
                        authtoken: authtoken,
                        guid: guid
                    });
                }
            });
        });

    return true; //for some reason if you don't have this the response doesn't get returned
  });
