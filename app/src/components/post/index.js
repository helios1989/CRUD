import angular from 'angular'

import PostService from './post.service'

import listPost from './list'
import CreatePost from './create'

const posts = angular
  .module('posts.app', [
    listPost,
    CreatePost
  ])
  .service('PostService', PostService)
  .name

export default posts