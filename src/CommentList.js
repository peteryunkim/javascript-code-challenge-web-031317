class CommentList{

  constructor(commentList){
    this.commentList = commentList
  }

  render(){
    let cArray = this.commentList;

    let cList =cArray.map(function(element){
      return `<li>${element}</li>`
    })
    return `<ul>${cList.join("")}</ul>`
  }


  addComment(string){
    let newComment = new Comment(string);
    this.commentList.push(newComment.text)
  }

}
//
// var num1 = new CommentList(["hey", "what", "is"])
// num1.addComment('up?')
// num1.render()
