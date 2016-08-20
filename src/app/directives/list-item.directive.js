import angular from 'angular';
import template from './list-item.html';

function listItem() {
  return {
    restrict: 'E',
    scope: {
      item: '='
    },
    template
  };
}

export default angular.module('directives.listItem', [])
  .directive('listItem', listItem)
  .name;
