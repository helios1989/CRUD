import angular from 'angular'

import PostComponent from './post.component'
import PostItemComponent from './post-item/post-item.component'
import PaginationComponent from './pagination/pagination.component'

import PaginationFilter from  './pagination/pagination.filter'

const listPost = angular
  .module('listpost.app', [])
  .component('postApp', PostComponent)
  .component('postItem', PostItemComponent)
  .component('pagination', PaginationComponent)
  .filter('startFromGrid', PaginationFilter)
  .name

export default listPost