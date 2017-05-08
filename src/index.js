$(document).ready(function(){
  // your code here!
  list()
})

/*-------------------------------
basic functioning
--------------------------------*/

// function list(){
//   $('#note-form').on('submit', function(event){
//     event.preventDefault()
//     $('#comment-list').append($('#text').val()+"<br>")
//     $('#text').val("")
//   })
// }

/*-------------------------------
with new instance of Comment -------------------------------*/


function list(){
  $('#note-form').on('submit', function(event){
    let text = new Comment($('#text').val())
    event.preventDefault()
    $('#comment-list').append(`${text.render()}<br>`)
    $('#text').val("")
  })
}

/*-------------------------------
trying to do something with CommentList
-------------------------------*/
// function list(){
//   $('#note-form').on('submit', function(event){
//     let text = new CommentList($('#text').val())
//     event.preventDefault()
//     $('#comment-list').append(`${text.render()}<br>`)
//   })
// }
