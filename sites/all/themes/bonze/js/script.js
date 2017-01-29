/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {


            $(window).load(function() {
                   $('.new_breadcrumb').css('display','inline-block');   

               


            });

            $(document).ready(function() {
                 $('.views-field-field-tag .field-content').before('<i class="fa fa-tag"></i>');

                $('.field-name-field-tag .field-items').before('<i class="fa fa-tag"></i>');
                $('.field-name-author .field-items').before('<i class="fa fa-user"></i>');
                $('.field-name-post-date .field-items').before('<i class="fa fa-calendar"></i>');
                $( ".breadcrumb" ).wrapInner( "<div class='new_breadcrumb'></div>");
                var tl = new TimelineLite();
                tl.from("#logo img", 0.5, { x: 300, autoAlpha: 0 })
                tl.from("#block-search-form", 0.5, { x: 300, autoAlpha: 0 })
                    .staggerFrom("#block-menu-menu-header .menu__item", 0.5, {
                        scale: 0,
                        rotation: -180,
                        autoAlpha: 0
                    }, 0.5);

                var tl1 = new TimelineLite();
                tl1.staggerFrom(".sidebars .tagclouds-term", 0.5, {
                    opacity: 0,
                    cycle: {
                        y: function(i) {
                            return i * 50;
                        },
                        ease: function(i) {
                            return Back.easeOut.config(i);
                        }
                    }
                }, 0.1);

                var tl2 = new TimelineLite();
                tl2.staggerFrom("#content .views-row", 0.5, {
                    opacity: 0,
                    cycle: {
                        y: function(i) {
                            return i * 50;
                        },
                        ease: function(i) {
                            return Back.easeOut.config(i);
                        }
                    }
                }, 0.5)

            });


        }
    };


})(jQuery, Drupal, this, this.document);
