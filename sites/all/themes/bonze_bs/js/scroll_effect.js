jQuery(document).ready(function($) {
    //var scroll_element = ".scroll_before";
    function scroll_class($before_class, $after_class) {
        $($before_class).each(function() {
            var $item = $(this);
            var scroll_top = $(this).offset().top - $(window).height();
            //console.log($(this).attr('class'));
            //console.log(scroll_top);
            //console.log('scrolltop:' + $(window).scrollTop(), 'window:' + $(window).height(), 'document:' + $(document).height());

            if ($(window).scrollTop() > scroll_top) {
                setTimeout(function() {
                    $item.addClass($after_class);
                }, 500);
            } else {
                setTimeout(function() {
                    //如果每次都要請移除註解
                    $item.removeClass($after_class);
                }, 500)
            }
        })
    }

    function scroll_class_object($before_class, $after_class) {
        $(document).ready(function() {
            setTimeout(function() {
                scroll_class($before_class, $after_class), 500
            })
        })
        $(window).scroll(function() {
            scroll_class($before_class, $after_class);
        })
    }

    scroll_class_object('.fadeIn-0', 'fadeIn-100');
    scroll_class_object('.fadeIn_right_0', 'fadeIn_right_100');
    scroll_class_object('.fadeIn_left_0', 'fadeIn_left_100');

})
