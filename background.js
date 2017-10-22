// Doing this here in the background because you can't grab cookie info in a content_script
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var authtoken = '';
        var guid = '';

        // Callback hell - this should be cleaned up at some point
        chrome.cookies.get({
            url: 'https://facebook.com/',
            name: 'c_user'
        }, function(cookie) {
            guid = cookie.value;

            chrome.cookies.get({
                url: 'http://replyreminder.com/',
                name: 'fbsr_167648883816027'
            }, function(cookie) {
                authtoken = cookie.value;

                if (request.greeting == 'cookiedata') {
                    sendResponse({
                        authtoken: authtoken,
                        guid: guid
                    });
                }
            });
        });

        return true; //for some reason if you don't have this the response doesn't get returned
    }
);
