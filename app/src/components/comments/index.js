import angular from 'angular'

import CommentService from './comment.service'
import ListComments from './list'

const comments = angular
  .module('comments.app', [
    ListComments
  ])
  .service('CommentService', CommentService)
  .name

export default comments
