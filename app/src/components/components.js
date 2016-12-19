import angular from 'angular'
import main from './main/main.component'
import about from './about/about.component'
import posts from  './post'

const components = angular
  .module('app.components',[
    posts
  ])
  .component('mainApp', main)
  .component('aboutApp', about)  
  .name

export default components