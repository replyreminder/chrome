var img = chrome.extension.getURL('icon.png');

//Delay to let page load - should probably attach this to some kind of element
window.setTimeout(function(){
    //Should probably come up with a way better to make it so this one will only on messenger.com, probably attached to some element
    // instead, let's just look to see if there's only 4 uls, which messenger.com does
    if(document.getElementsByTagName('ul').length === 3){ //messenger.com or https://www.facebook.com/messages/ without shared files
        document.getElementsByTagName('ul')[2].innerHTML += '<li><span><a style="background-image:url(' + img + ')" id="replyreminder_messenger" href="#"></a></span></li>';

        document.getElementById('replyreminder_messenger').addEventListener('click', function(e){
            e.preventDefault();
            console.log('click');
        }, false);
    } else if(document.getElementsByTagName('ul').length === 4){ //messenger.com or https://www.facebook.com/messages/ with shared files
        document.getElementsByTagName('ul')[3].innerHTML += '<li><span><a style="background-image:url(' + img + ')" id="replyreminder_messenger" href="#"></a></span></li>';

        document.getElementById('replyreminder_messenger').addEventListener('click', function(e){
            e.preventDefault();
            console.log('click');
        }, false);
    }
}, 6000);
