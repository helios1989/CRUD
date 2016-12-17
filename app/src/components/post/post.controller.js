class PostController {
  constructor(PostService){
    'ngInject'
    this.postService = PostService
    this.post = []
  }

  $onInit(){
    this.postService.seachPosts().then(response => {
      this.posts = response.data
    })
  }
}

export default PostController