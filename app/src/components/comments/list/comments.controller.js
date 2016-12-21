class CommentsController {
  constructor(CommentService){
    'ngInject'
    this.commentService = CommentService
    this.comments = []
    this.items = []
    this.isScroll = false
  }

  $onInit(){
    this.commentService.search()
      .then((response) => {
        this.comments = response.data
        this.isScroll = true
        let arrayTest = this.comments
        this.items = arrayTest.slice(1,10)
      })
  }

  loadScroll(){
    const ncomment = this.comments.length
    const nItems = this.items.length

    console.log(`comments: ${ncomment}, items: ${nItems}, scroll: ${this.isScroll}`)
    if(this.isScroll){ 
      for (var i = 1; i <= 10; i++) {
        if(nItems + i < ncomment){
          this.items.push(this.comments[nItems+i])
        }else{
          console.log(`total ${i}`, nItems+i)
          this.isScroll = false
          break
        }
      }
    }
  }
}

export default CommentsController