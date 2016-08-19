import './index.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import landing from './app/features/landing';

angular.module('app', [uirouter, landing])
  .config(routing);
