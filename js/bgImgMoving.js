window.scroll(function () {
    var scroll_position = window.scrollY; 
    // reads user scroll position
    $('#footer__border').css({
        'height': + scroll_position * 0.02 + 'px',
    });
    $('#container__welcome-image').css({
        'background-position-y': - scroll_position * 0.3 + 'px',
        'background-position-x': - scroll_position * 0.3 + 'px',
    });
});