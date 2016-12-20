class CommentService {
  constructor($http){
    'ngInject'
    this.$http = $http
  }

  search(){
    return this.$http.get('http://jsonplaceholder.typicode.com/comments');
  }
}