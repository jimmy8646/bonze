<?php

class me_node_creation_CrumbsMonoPlugin implements crumbs_MonoPlugin {

  /**
   * @param crumbs_InjectedAPI_describeMonoPlugin $api
   *   Injected API object, with methods that allows the plugin to further
   *   describe itself.
   *
   * @return void
   */
  function describe($api) {
    $api->setTitle('Set breadcrumbs for placeholder pages.');
  }

  /**
   * Find candidates for the parent path.
   *
   * @param string $path
   *   The path that we want to find a parent for.
   * @param array $item
   *   Item as returned from crumbs_get_router_item()
   *
   * @return string
   *   Parent path candidate.
   */
  function findParent($path, $item) {
    switch ($item['route']) {
      case 'node/add/%/mlid/%':
        $mlid = $item['fragments'][4];
        return "mlid/$mlid/under-construction";
      case 'mlid/%/under-construction':
        // Let the menu.hierarchy.* plugin do its thing
        break;
    }

    return NULL;
  }
}
