import angular from 'angular'
import main from './main/main.component'
import about from './about/about.component'
import posts from  './post'
import comments from './comments'

const components = angular
  .module('app.components',[
    posts,
    comments
  ])
  .component('mainApp', main)
  .component('aboutApp', about)
  .name

export default components