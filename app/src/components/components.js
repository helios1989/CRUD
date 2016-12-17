import angular from 'angular'
import main from './main/main.component'
import about from './about/about.component'

const components = angular
  .module('app.components',[])
  .component('mainApp', main)
  .component('aboutApp', about)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<main-app></main-app>'//otra version
      })
      .state('about', {
        url: '/about',
        template: '<about-app></about-app>'//otra version
      })


    $urlRouterProvider.otherwise('/')
  })
  .run(($rootScope, $state, $stateParams) => {
    console.log($state.is('about'));
    console.log($state.includes('home'));
    console.log($state);
    console.log($state.current);
    $rootScope.$state = $state   
    $rootScope.$stateParams = $stateParams 
  })
  .name

export default components