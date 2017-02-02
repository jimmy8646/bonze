(function($) {

    function scroll_fakeScrollbar($scrollBarItem) {

        var $element = new Object;
        $element.item = $($scrollBarItem);
        $element.scrollHeight = $element.item[0].scrollHeight;
        $element.width = $element.item.innerWidth();
        $element.height = $element.item.innerHeight();

        $(window).resize(function() {
            $element.scrollHeight = $element.item[0].scrollHeight;
            $element.width = $element.item.innerWidth();
            $element.height = $element.item.innerHeight();
        })


        var $fakeScrollBar = new Object;
        $fakeScrollBar.name = "fake_scrollBar";
        $fakeScrollBar.item = $($fakeScrollBar.name);
        $fakeScrollBar.width = 4;
        $fakeScrollBar.barColor = "rgba(229,229,229,0.8)";
        $fakeScrollBar.navWidth = 6;
        $fakeScrollBar.navColor = "#98ACC0";
        $fakeScrollBar.margin = 10;


        var $browserScoll = new Object;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $browserScoll.width = 0;
        } else {
            $browserScoll.width = 15;
        }



        //hidden browserScoll
        $element.item.css('clip', 'rect(auto, ' + ($element.width - $browserScoll.width) + 'px, auto, auto)');

        $(window).resize(function() {
            $element.item.css('clip', 'rect(auto, ' + ($element.width - $browserScoll.width) + 'px, auto, auto)');
        })


        //append fake_scrollBar element

        $element.item.append('<div class ="' + $fakeScrollBar.name + '"><div class ="wrapper"><div class ="scroll-nav"></div></div></div>');


        //scrollbar
        $element.item.find('.' + $fakeScrollBar.name).css({
            'position': 'absolute',
            'right': '0',
            'top': $element.item.scrollTop(),
            'display': "block",
            'width': $fakeScrollBar.width,
            'height': $element.height,
            'background': $fakeScrollBar.barColor,
        })

        $element.item.find('.' + $fakeScrollBar.name).children().css({
            'position': 'relative',
            'display': 'block',
            'width': $fakeScrollBar.width,
            'height': '100%',
            'right':$fakeScrollBar.width,
        })

        //scroll nav
        $element.item.find('.' + $fakeScrollBar.name).children().children().css({
            'position': 'absolute',
            'right': '0',
            'top': $element.item.scrollTop() + $fakeScrollBar.margin,
            'display': "block",
            'width': $fakeScrollBar.navWidth,
            'height': ($element.height / $element.scrollHeight) * 100 + "%",
            'background': $fakeScrollBar.navColor,
            'z-index':'500',
        })

        //resize evevt
        $(window).resize(function() {
            //scrollbar
            $element.item.find('.' + $fakeScrollBar.name).css({
                    'height': $element.height,
                })
                //scroll nav
            $element.item.find('.' + $fakeScrollBar.name).children().children().css({
                'height': ($element.height / $element.scrollHeight) * 100 + "%",
            })
        })

        $($element.item).scroll(function() {
            $element.item.find('.' + $fakeScrollBar.name).css({
                'top': $element.item.scrollTop(),
            })
            if (($element.item.scrollTop() + $element.height) !== $element.scrollHeight) {
                $element.item.find('.' + $fakeScrollBar.name).children().children().css({
                    'top': ($element.height / $element.scrollHeight) * $element.item.scrollTop() - $fakeScrollBar.margin,
                })
            }
            if ($element.item.scrollTop() == 0) {
                $element.item.find('.' + $fakeScrollBar.name).children().children().css({
                    'top': $element.item.scrollTop() + $fakeScrollBar.margin,
                })
            }
            //console.log(($element.item.scrollTop() + $(window).height()), $element.scrollHeight);
        })

    }


    $(document).ready(function() {
        setTimeout(function() {
            scroll_fakeScrollbar('.region-sidebar-first');
        }, 100)
    })



})(jQuery)
