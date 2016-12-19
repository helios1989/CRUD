class NewPostController {
  constructor(PostService){
    'ngInject'
    this.postService = PostService
    this.post = {}
  }

  savePost(){
    this.postService.savePost(this.post)
      .then((data) => {
        if(data.status === 201){
          alert('Post guardado con exito')
          this.post = {}
          window.location.href = '#!/posts'
        }else{
          alert('problemas al guardar post')
          console.log(data)
        }
      })
      .catch(error => {
        alert(error)
      });
  } 

}

export default NewPostController