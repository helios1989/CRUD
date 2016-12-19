import angular from 'angular'

import PostComponent from './post.component'
import PostItemComponent from './post-item/post-item.component'
import PaginationComponent from './pagination/pagination.component'

import PostService from './post.service'
import PaginationFilter from  './pagination/pagination.filter'

const post = angular
  .module('post.app', [])
  .component('postApp', PostComponent)
  .component('postItem', PostItemComponent)
  .component('pagination', PaginationComponent)
  .service('PostService', PostService)
  .filter('startFromGrid', PaginationFilter)
  .name

export default post