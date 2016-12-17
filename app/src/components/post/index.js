import angular from 'angular'

import PostComponent from './post.component'

const post = angular
  .module('post.app', [])
  .component('postApp', PostComponent)
  .name

export default post