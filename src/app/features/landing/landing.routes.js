routes.$inject = ['$stateProvider'];
import template from './landing.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('landing', {
      url: '/',
      template,
      controller: 'LandingController',
      controllerAs: 'landing'
    });
}
