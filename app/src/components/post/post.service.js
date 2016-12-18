class PostService {
  constructor($http){
    'ngInject'
    this.$http = $http;
    this.posts = []
  }

  seachPosts(){
    return this.$http.get('http://jsonplaceholder.typicode.com/posts')
      //.then((response) => response.data)
  }

  findPost(id){
    return this.$http.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  }
}

export default PostService