class PostService {
  constructor($http){
    'ngInject'
    this.$http = $http;
  }

  seachPosts(){
    return this.$http.get('http://jsonplaceholder.typicode.com/posts');
  }

  findPost(id){
    return this.$http.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
  }
}

export default PostService