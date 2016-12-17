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
        component: 'mainApp'//otra version
      })
      .state('about', {
        url: '/about',
        component: 'aboutApp'//otra version
      })

    $urlRouterProvider.otherwise('/')
  })
  .name

export default components