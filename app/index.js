import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngInfiniteScroll from 'ng-infinite-scroll';

import AppComponent from './src/app';
import common from './src/common/common'
import components from './src/components/components'
import router from './router'

angular
  .module('app', [
    uiRouter,
    ngInfiniteScroll,
    common,
    components
  ])
  .component('root', AppComponent)
  .config(router)