class NewPostController {
  constructor(PostService, $stateParams){
    'ngInject'
    this.postService = PostService
    this.$stateParams = $stateParams
    this.post = {}
  }

  $onInit(){
    console.log(this.$stateParams.id !== undefined)
    if(this.$stateParams.id !== undefined && this.$stateParams.id !== 'undefined' && this.$stateParams.id !== null){
      console.log('entro')
      this.postService.findPost(this.$stateParams.id)
        .then((response) => {
          console.log('respuesta', response)
          if(response.status === 200){
            this.post = response.data
          }
        })
        .catch((error) => {
          alert('Data no found')
        })
    }
  }

  actionPost(){
    if(this.isEdit){  
      this.editPost()  
    }else{        
      this.savePost()
    }
  }

  savePost(){
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
  }

  editPost(){
    this.post.id = this.$stateParams.id
    console.log(this.post)
    this.postService.editPost(this.post)
      .then((data) => {
        console.log(data)
        if(data.status === 200){
          alert('Post guardado con exito')
          //window.location.href = '#!/posts'
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