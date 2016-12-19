import angular from 'angular'

import NewPost from './newPost.component'

const CreatePost = angular
  .module('createPost.app', [])
  .component('createPost', NewPost)
  .name

  export default CreatePost