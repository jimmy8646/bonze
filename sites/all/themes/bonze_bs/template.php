<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */


/**
 * Override or insert variables into the maintenance page template.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("maintenance_page" in this case.)
 */
/* -- Delete this line if you want to use this function
function bonze_bs_preprocess_maintenance_page(&$variables, $hook) {
  // When a variable is manipulated or added in preprocess_html or
  // preprocess_page, that same work is probably needed for the maintenance page
  // as well, so we can just re-use those functions to do that work here.
  bonze_bs_preprocess_html($variables, $hook);
  bonze_bs_preprocess_page($variables, $hook);
}
// */

/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
/* -- Delete this line if you want to use this function
function bonze_bs_preprocess_html(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // The body tag's classes are controlled by the $classes_array variable. To
  // remove a class from $classes_array, use array_diff().
  //$variables['classes_array'] = array_diff($variables['classes_array'], array('class-to-remove'));
}
// */

/**
 * Override or insert variables into the page templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */
/* -- Delete this line if you want to use this function
function bonze_bs_preprocess_page(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */
/* -- Delete this line if you want to use this function
function bonze_bs_preprocess_node(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // Optionally, run node-type-specific preprocess functions, like
  // bonze_bs_preprocess_node_page() or bonze_bs_preprocess_node_story().
  $function = __FUNCTION__ . '_' . $variables['node']->type;
  if (function_exists($function)) {
    $function($variables, $hook);
  }
}
// */

/**
 * Override or insert variables into the comment templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function bonze_bs_preprocess_comment(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the region templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
/* -- Delete this line if you want to use this function
function bonze_bs_preprocess_region(&$variables, $hook) {
  // Don't use Zen's region--sidebar.tpl.php template for sidebars.
  //if (strpos($variables['region'], 'sidebar_') === 0) {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('region__sidebar'));
  //}
}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
/* -- Delete this line if you want to use this function
function bonze_bs_preprocess_block(&$variables, $hook) {
  // Add a count to all the blocks in the region.
  // $variables['classes_array'][] = 'count-' . $variables['block_id'];

  // By default, Zen will use the block--no-wrapper.tpl.php for the main
  // content. This optional bit of code undoes that:
  //if ($variables['block_html_id'] == 'block-system-main') {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('block__no_wrapper'));
  //}
}
// */

function bonze_bs_preprocess_node(&$variables, $hook){

  if($variables['view_mode']=='vm_1'){

    $colClass1 ="col-lg col-md col-xs-12";

      //dpm($variables);
        $variables['content']['calendar']['#prefix']='<div class ="row wrapper center-xs">';
        $variables['content']['ds_user_picture']['#prefix']='<div class ="field-perfile '.$colClass1.'"><div class ="perfile-wrapper wrapper">';
        $variables['content']['author']['#suffix']='</div></div>';
        $variables['content']['title']['#prefix']='<div class ="field-content'.$colClass1.'"><div class ="content-wrapper wrapper"><div class ="wrapper">';
        $variables['content']['field_like']['#suffix']='</div></div></div></div>';

        if($variables['zebra'] == "odd"){
          $variables['content']['ds_user_picture']['#prefix']='<div class ="field-perfile  first-lg first-md '.$colClass1.' row end-lg end-md center-xs middle-xs"><div class ="perfile-wrapper wrapper">';
          $variables['content']['title']['#prefix']='<div class ="field-content last-xs '.$colClass1.'"><div class ="content-wrapper wrapper"><div class ="wrapper">';
        }
        if($variables['zebra'] == "even"){
          $variables['content']['ds_user_picture']['#prefix']='<div class ="field-perfile last-lg last-md'.$colClass1.' row start-lg start-md center-xs middle-xs "><div class ="perfile-wrapper wrapper">';
          $variables['content']['title']['#prefix']='<div class ="field-content first-lg first-md last-xs '.$colClass1.'"><div class ="content-wrapper wrapper"><div class ="wrapper">';
        }
  }

  if($variables['view_mode']=='vm_2'){

    $colClass1 ="col-xs-12";

      //dpm($variables);
        $variables['content']['ds_user_picture']['#prefix']='<div class ="row wrapper center-xs"><div class ="field-perfile"><div class ="perfile-wrapper wrapper">';
        $variables['content']['author']['#suffix']='</div></div>';
        $variables['content']['title']['#prefix']='<div class ="field-content '.$colClass1.'"><div class ="content-wrapper wrapper"><div class ="wrapper">';
        $variables['content']['field_like']['#suffix']='</div></div></div></div>';

        // if($variables['zebra'] == "odd"){
        //   $variables['content']['ds_user_picture']['#prefix']='<div class ="field-perfile  first-lg first-md '.$colClass1.' row end-lg end-md center-xs middle-xs"><div class ="perfile-wrapper wrapper">';
        //   $variables['content']['title']['#prefix']='<div class ="field-content last-xs '.$colClass1.'"><div class ="content-wrapper wrapper"><div class ="wrapper">';
        // }
        // if($variables['zebra'] == "even"){
        //   $variables['content']['ds_user_picture']['#prefix']='<div class ="field-perfile last-lg last-md'.$colClass1.' row start-lg start-md center-xs middle-xs "><div class ="perfile-wrapper wrapper">';
        //   $variables['content']['title']['#prefix']='<div class ="field-content first-lg first-md last-xs '.$colClass1.'"><div class ="content-wrapper wrapper"><div class ="wrapper">';
        // }
  }

  if($variables['view_mode']=='full'){

    $colClass1 ="col-xs-12";

      //dpm($variables);
        $variables['content']['ds_user_picture']['#prefix']='<div class ="perfile-block margin-bottom-block middle-xs"><div class ="row">';
        //$variables['content']['ds_user_picture']['#suffix']='<div>';
        $variables['content']['author']['#prefix'] = '<div class ="perfile-info-field  col-xs"><div class ="row"><div class ="col-xs-12 "><div class ="row">';
        $variables['content']['post_date']['#suffix']='</div></div>';
        $variables['content']['field_tag']['#prefix'] ='<div class ="col-xs-12">';
        $variables['content']['field_tag']['#suffix'] ='</div></div></div></div></div>';


  }
}
