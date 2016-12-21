import angular from 'angular'

import CommentsComponent from './comments.component'
import ItemCommentComponent from './item-comment/item-comment.component'

const ListComments = angular
  .module('listComments.app', [
  ])
  .component('comments', CommentsComponent)
  .component('itemComment', ItemCommentComponent)
  .name

export default ListComments
