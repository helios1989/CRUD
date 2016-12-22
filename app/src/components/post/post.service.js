class PostService {
  constructor($http){
    'ngInject'
    this.$http = $http;
    this.prueba = 2
  }

  setPrueba(value ){
    this.prueba = value
  }

  getPrueba(){
    return this.prueba
  }

  seachPosts(){
    return this.$http.get('http://jsonplaceholder.typicode.com/posts')
      //.then((response) => response.data)
  }

  findPost(id){
    return this.$http.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  }

  savePost(post = {}){
    return this.$http({
      method:'post',
      url:'http://jsonplaceholder.typicode.com/posts',
      data: post
    })
  }

  editPost(post = {}){
    return this.$http({
      method:'put',
      url:`http://jsonplaceholder.typicode.com/posts/${post.id}`,
      data: post
    })
  }

  deletePost(id){
    return this.$http({
      method:'delete',
      url:`http://jsonplaceholder.typicode.com/posts/${id}`
    })
  }
}

export default PostService