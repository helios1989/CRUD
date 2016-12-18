import angular from 'angular'

import PostComponent from './post.component'
import PostItemComponent from './post-item/post-item.component'
import PaginationComponent from './pagination/pagination.component'

import PostService from './post.service'

const post = angular
  .module('post.app', [])
  .component('postApp', PostComponent)
  .component('postItem', PostItemComponent)
  .component('pagination', PaginationComponent)
  .service('PostService', PostService)
  .filter('startFromGrid', () =>{
    return (input, start) => {
      console.log(start)
      console.log('primero',input)
      console.log(' segundo',input.slice(start))
      console.log(input.slice(start).length)
      start =+ start
      return input.slice(start)
    }
  })
  .name

export default post