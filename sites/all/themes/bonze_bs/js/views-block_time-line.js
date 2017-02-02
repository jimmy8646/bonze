jQuery(document).ready(function($) {
    function timeLine($blockName,$blockChriden) {
        $($blockName).addClass('timeLine');

        //time line bar
        $('.timeLine').prepend('<div class ="timeLine-bar"></div>');

        var timeLineHeight = $(window).height();
        var scrollHeight = timeLineHeight + $(window).scrollTop();
        $('.timeLine-bar').css('height', scrollHeight);

        $(window).scroll(function() {
            var scrollHeight = timeLineHeight + $(window).scrollTop();
            $('.timeLine-bar').css('height', scrollHeight);
        })


        //year group
        var yearArr = [];
        //指定 group 元素
        var timeLineGroup = ".calendar .year";

        $(timeLineGroup).hide();


        $(timeLineGroup).each(function() {
            yearArr.push($(this).html());
        });

        //移除重複元素
        yearArr = yearArr.filter(function(element, index, arr) {
            return arr.indexOf(element) === index;
        });

        //console.log(yearArr);

        for (var i = 0; i < yearArr.length; i++) {
            for (var k = 0; k < $(timeLineGroup).length; k++) {
                if ($(timeLineGroup).eq(k).html() == yearArr[i]) {
                    $(timeLineGroup).eq(k).addClass('timeLineGroup_obj');
                    break;
                }
            }
        }

        for (var i = 0; i < $('.timeLine').find($blockChriden).length; i++) {
          if($('.timeLine').find($blockChriden).eq(i).find('.timeLineGroup_obj').length > 0){
            $('.timeLine').find($blockChriden).eq(i).before('<li class ="timeLine-group"><div class ="timeLine-group-content">'+$('.timeLine').find($blockChriden).eq(i).find(timeLineGroup).html()+'</div></li>')
          }
          //console.log(i);
        }

    }
    timeLine('.views-block_time-line .view > .view-content','li.views-row');
})
