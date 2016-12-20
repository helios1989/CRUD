import template from './create.html'

import controller from './newPost.controller'

const NewPost = {
  template,
  controller,
  bindings: {
    isEdit: '<'
  }
}

export default NewPost