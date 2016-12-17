import angular from 'angular'
import main from './main/main.component'
import about from './about/about.component'
import post from  './post'

const components = angular
  .module('app.components',[
    post
  ])
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