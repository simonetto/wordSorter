import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './landing.routes';
import LandingController from './landing.controller';

import sorting from '../../services/sorting.service';

export default angular.module('app.home', [uirouter, sorting])
  .config(routing)
  .controller('LandingController', LandingController)
  .name;
