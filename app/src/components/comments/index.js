import angular from 'angular'

import CommentsComponent from './list/comments.component'

const comments = angular
  .module('comments.app', [
  ])
  .component('comments', CommentsComponent)
  .name

export default comments
