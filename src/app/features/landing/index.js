import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './landing.routes';
import LandingController from './landing.controller';

import sorting from '../../services/sorting.service';

import listItem from '../../directives/list-item.directive';

export default angular.module('app.home', [uirouter, sorting, listItem])
  .config(routing)
  .controller('LandingController', LandingController)
  .name;
