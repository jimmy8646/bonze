jQuery(document).ready(function($) {




    function scrollStateBar() {
        if ($('.scroll_state_bar').length == 0) {
            $('body').prepend('<div class ="scroll_state_bar"></div>');
        }

        $('.scroll_state_bar').css({
            'position': 'fixed',
            'z-index': '100',
            'display': 'block',
            'height': '4px',
            'background': '#4A8CB4',
        })
        $width = ($(window).height() + $(window).scrollTop()) / $(document).height() * 100;
        $widthPersent = $width + '%';


        if ($(window).scrollTop() == 0) {
            $('.scroll_state_bar').css({
                'width': '0',
                'opacity': '0',
            })
        } else {
            $('.scroll_state_bar').css({
                'width': $widthPersent,
                'opacity': '0.8',
            })
        }

    }

    $(window).scroll(function() {
        scrollStateBar();
    })

})
