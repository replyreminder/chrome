var img = chrome.extension.getURL('icon.png');

var initAndAddEventListeners = function(){
    $('body').append(
        '<div class="remodal" data-remodal-id="modal"> \
            <button data-remodal-action="close" class="remodal-close"></button> \
            <h1>Remodal</h1> \
            <p> \
                Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking. \
            </p> \
            <br> \
            <input id="datetimepicker"> \
            <br> \
            <button data-remodal-action="cancel" class="remodal-cancel">Cancel</button> \
            <button data-remodal-action="confirm" class="remodal-confirm">OK</button> \
        </div>'
    );

    var modal = $('[data-remodal-id=modal]').remodal();

    var datetimepicker = $("#datetimepicker").flatpickr({
        enableTime: true,
        altInput: true,
        minDate: 'today',
    });

    document.getElementById('replyreminder_messenger').addEventListener('click', function(e){
        e.preventDefault();
        console.log('click');
        modal.open();
    }, false);
}

//Delay to let page load - should probably attach this to some kind of element
window.setTimeout(function(){
    //Should probably come up with a way better to make it so this one will only on messenger.com, probably attached to some element
    // instead, let's just look to see if there's only 4 uls, which messenger.com does
    var ulLength = document.getElementsByTagName('ul').length;

    if ([3,4].indexOf(ulLength) > -1) { // indexof returns -1 if this is not true, that means we are on messenger.com or https://www.facebook.com/messages/ without shared files
        document.getElementsByTagName('ul')[ulLength - 1].innerHTML += '<li><span><a style="background-image:url(' + img + ')" id="replyreminder_messenger" href="#"></a></span></li>';

        initAndAddEventListeners();
    }
}, 6000);
