class Comment {

  constructor(text) {
    this.text = text
  }

  render(){
    return `<li>${this.text}</li>`
  }

}

// var a = new Comment('yo')
// a.render()
