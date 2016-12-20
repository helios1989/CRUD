class NewPostController {
  constructor(PostService, $stateParams){
    'ngInject'
    this.postService = PostService
    this.$stateParams = $stateParams
  }

  $onInit(){
    console.log(this.$stateParams.id)

  }

  savePost(){
    if(this.isEdit){
      console.log('editar')
      alert('editando...')      
    }else{        
      console.log('nuevo')
      alert('creando...')
    }
    /*
    this.postService.savePost(this.post)
      .then((data) => {
        console.log(data)
        if(data.status === 201){
          alert('Post guardado con exito')
          this.post = {}
          //window.location.href = '#!/posts'
        }else{
          alert('problemas al guardar post')
          console.log(data)
        }
      })
      .catch(error => {
        alert(error)
      });
      */
  }

}

export default NewPostController