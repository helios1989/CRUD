import angular from 'angular'
import uiRouter from 'angular-ui-router'

import AppComponent from './src/app';
import common from './src/common/common'
import components from './src/components/components'

angular
  .module('app', [
    uiRouter,
    common,
    components
  ])
  .component('root', AppComponent)
  
  /*.run(($rootScope, $state, $stateParams) => {
    console.log($state.includes('about'));
    console.log($state.includes('home'));
    console.log($state);
    console.log($state.$urlRouter.location);
    $rootScope.$state = $state   
    $rootScope.$stateParams = $stateParams 
  })*/