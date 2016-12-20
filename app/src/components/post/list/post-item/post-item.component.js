import template from './post-item.html'

const PostItemComponent = {
  bindings:{
    post: '<',
    removePost: '&'
  },
  template
}

export default PostItemComponent