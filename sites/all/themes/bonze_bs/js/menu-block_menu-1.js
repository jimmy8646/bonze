jQuery(document).ready(function($) {

  //settime ou fadein function
  function delay_addclass_child($object, $child_object, $second) {
    var delay = 0;
    $($object).find($child_object).each(function() {
      var $item = $(this);
      setTimeout(function() {
        $item.toggleClass('fadin');
      }, delay += $second);
    })
  }



  //responsive menu function
  function responsive_menu_nav($menu) {
    //html 架構
    var class_name = $($menu).attr('class');
    $('body').prepend($($menu).clone().addClass('responsive-menu'));
    $($menu).not('.responsive-menu').after('<div class ="' + "nav" + " " + class_name + '"><a class ="nav-button" href ="javascript:;"><span class ="nav-item item1"></span><span class ="nav-item item2"></span><span class ="nav-item item3"></span></a></div>');
    //menu與button 變數
    var nav_button = $menu + ".nav";
    var responsive_menu = $menu + ".responsive-menu";
    //nav click事件
    $(nav_button).click(function() {
      $(responsive_menu).fadeToggle();
      $(nav_button).toggleClass('click');
      delay_addclass_child(responsive_menu, 'li.menu__item', 150);
    });
    //responsive menu style
    $(responsive_menu).css({
      'display': "none",
      'position': 'fixed',
      'z-index': '200',
      'bottom': "0px",
      'width': '100%',
    });
    $(document).ready(function() {
      $(responsive_menu).css('height', $(window).height() - $('#header').innerHeight());
    });
    $(window).resize(function() {
      $(responsive_menu).css('height', $(window).height() - $('#header').innerHeight());
    });
    $(window).scroll(function() {
      $(responsive_menu).css('height', $(window).height() - $('#header').innerHeight());
    })
  };


  //hover特效
  function menu_item_hover($parent_item, $child_item, $acive_class) {
    $($parent_item).after('<div class ="active_bar"></div>');
    //配合jquery position對 parent 元素下相對位置
    $($parent_item).parent().css({
        'position': 'relative',
      })
      //初始位置
    $($parent_item).children($child_item + $acive_class).each(function() {
        $('.active_bar').css({
          'left': $(this).position().left,
          'width': $(this).width(),
          'opacity': '100',
        })
      })
      //hover後位置
    $($parent_item).children($child_item).each(function() {
      //console.log($(this).position().left);
      $(this).hover(function() {
        $('.active_bar').css({
          'left': $(this).position().left,
          'width': $(this).width(),
        })
      })
    })
  }
  menu_item_hover('.menu-block_menu-1 .menu-block-wrapper >.menu', 'li.menu__item', '.active');



  //for scrollLock header
  $(document).ready(function() {
    responsive_menu_nav('.menu-block_menu-1');
    //$('.menu-block_main-menu').scrollLock();
  });

});
