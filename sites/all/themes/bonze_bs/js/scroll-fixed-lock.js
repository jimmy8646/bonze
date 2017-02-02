jQuery(document).ready(function($) {

    $('#content').css('minHeight', $(window).height() * 1.1);

    $startItem = '#banner';
    $endItem = '#footer';



    //sidebar lock
    function scroll_fixed_lock($scrollFixedItem) {

        //style
        $($scrollFixedItem).css('maxHeight', $(window).height());
        $($scrollFixedItem).parent().parent().css({
            'position': 'relative',
        })

        $($scrollFixedItem).css({
            'position': 'absolute',
            'top': '0',
            'bottom': 'auto',
            'height': '100%',
            'overflow-y': 'scroll',
        })

        if ($($scrollFixedItem).innerHeight() > $(window).width()) {
            $($scrollFixedItem).css({
                'width': "70%",
            })
        } else {
            $($scrollFixedItem).css({
                'width': "auto",
            })
        }


        if ($(window).width() > 1200) {
            $($scrollFixedItem).parent().animate({
                'width': $($scrollFixedItem).width(),
            }, 0)
        } else(
            $($scrollFixedItem).parent().css({
                'width': 'auto',
            })
        )


        $startItemOffset = $($startItem).offset();
        $endItemOffset = $($endItem).offset();


        function scrollPosition() {
            if ($(window).scrollTop() > $($startItem).innerHeight() + $startItemOffset.top && $(window).scrollTop() < $endItemOffset.top - $(window).height()) {
                $($scrollFixedItem).css({
                    'position': 'fixed',
                })
            } else {
                $($scrollFixedItem).css({
                    'position': 'absolute',
                })
            }
        }

        function scrollOffset() {
            if ($(window).scrollTop() < $endItemOffset.top - $(window).height()) {
                $($scrollFixedItem).css({
                    'top': '0',
                    'bottom': 'auto',
                })
            } else {
                $($scrollFixedItem).css({
                    'top': 'auto',
                    'bottom': '0',
                })
            }
        }

        $(window).scroll(function() {
            scrollPosition();
            scrollOffset();
        })


        $(document).ready(function() {
            scrollPosition();
            scrollOffset();
        })

    }




    //sidebarNav button
    function sidebarNav() {
        $parent = '#main';
        $sidebars = '.region-sidebar-first';
        $content = '#content';


        $($parent).css({
            'position': 'relative',
            'overflow-x': 'hidden',
        });

        $(content).css({
            'position': 'relative',
            'left': '0',
        });


        //sidebarNav_button style
        $($content).prepend('<div class ="sidebarNav_button"><a href ="javascript:;">></a></div>');
        $('.sidebarNav_button').css({
            'position': 'absolute',
            'z-index': '10',
            'left': '0',
        });


        //sidebarNav_button top animate
        function scrollOffsetNav() {
            $startItemOffset = $($startItem).offset();
            $endItemOffset = $($endItem).offset();

            if ($(window).scrollTop() + $($startItem).innerHeight() + $startItemOffset.top < $('#main').innerHeight()) {
                $('.sidebarNav_button').css({
                    'top': $(window).scrollTop() + 40,
                })
            }
        }

        $(window).scroll(function() {

            scrollOffsetNav();
        })

        $(document).ready(function() {

            scrollOffsetNav();
        })



        //toggle click function


        var i = 0;

        //responsive 切換時,防呆
        $(window).resize(function() {
            if ($(window).width() > 1200) {
                i = 0;
                $($content).css({
                    'left': '0',
                })
            }
        })


        $('.sidebarNav_button').click(function() {
            //sidebars animate

            //for pc
            if (i % 2 == 0) {
                if ($(window).width() > 1200) {
                    $($sidebars).parent().animate({
                        'width': '0',
                    }, 500)
                }
            } else {
                if ($(window).width() > 1200) {
                    $($sidebars).parent().animate({
                        'width': $('.region-sidebar-first').width(),
                    }, 500)
                }
            }

            //for phone
            if (i % 2 == 0) {
                if ($(window).width() < 1200) {
                    $($content).animate({
                        'left': $('.region-sidebar-first').innerWidth(),
                    }, 300)
                }
            } else {
                if ($(window).width() < 1200) {
                    $($content).animate({
                        'left': '0',
                    }, 300)
                }
            }
            i++;
        })


        //auto close sidebar
        // $once = 0;
        // $(window).scroll(function() {
        //     if ($(window).width() > 1200) {
        //         if ($(window).scrollTop() > $($startItem).innerHeight() + 300 +
        //             $startItemOffset.top && $(window).scrollTop() < $endItemOffset.top - $(window).height()) {
        //             if ($once == 1 && i % 2 == 0) {
        //                 $('.sidebarNav_button').trigger('click');
        //             }
        //             $once++;
        //         }
        //     }
        //
        //
        //
        // })

    }





    //執行fscroll_fixed_lock function
    $(document).ready(function() {
        scroll_fixed_lock('.region-sidebar-first');
        sidebarNav();
    })



    $(window).resize(function() {
        scroll_fixed_lock('.region-sidebar-first');
    });

    //防呆 disqus 後面 loading出的高
    setTimeout(function() {
        if ($('#disqus_thread').length > 0) {
            scroll_fixed_lock('.region-sidebar-first');
        }
    }, 5000);







})
