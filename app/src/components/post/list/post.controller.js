class PostController {
  constructor(PostService){
    'ngInject'
    this.postService = PostService
    this.posts = []

    //attr to pagination
    this.currentPage = 0
    this.pageSize = 10
    this.pages = []
    /***************/
  }

  $onInit(){
    this.postService.seachPosts().then(response => {
      this.posts = response.data
      this.paginationConfig()
    })
  }

  removePost(id){
    this.postService.deletePost(id)
      .then((data) => {
        console.log(data)
        if(data.status === 200){
          
          alert('Post eliminado con exito')
          //window.location.href = '#!/posts'
        }else{
          alert('problemas al eliminar post')
          console.log(data)
        }
      })
      .catch(error => {
        alert(error)
      });
  }

  paginationConfig(){
    //this.pages.length = 0
    const numPosts = this.posts.length 
    let ini = this.currentPage - 4
    let fin = this.currentPage + 5
    if(ini < 1){
      ini = 1
      if(Math.ceil(numPosts / this.pageSize) > 0){
        fin = 10
      }else{
        fin = Math.ceil(numPosts / this.pageSize)
      }
    }else{
      if(ini >= Math.ceil(numPosts / this.pageSize) - 10){
        ini = Math.ceil(numPosts / $this.pageSize) - 10
        fin = Math.ceil(numPosts / $this.pageSize)
      }
    }
    if (ini < 1) ini = 1
    for (var i = ini; i <= fin; i++) {
      this.pages.push({
        no: i
      })
    }

    if(this.currentPage >= this.pages.length){
      this.currentPage = this.pages.length - 1
    }
  }

  setPage(index){
    //console.log('este es el parametro',index)
    this.currentPage = index - 1
  }
}

export default PostController