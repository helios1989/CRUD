import angular from 'angular'

import PostComponent from './post.component'
import PostItemComponent from './post-item/post-item.component'
import PostService from './post.service'

const post = angular
  .module('post.app', [])
  .component('postApp', PostComponent)
  .component('postItem', PostItemComponent)
  .service('PostService', PostService)
  .name

export default post