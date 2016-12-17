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