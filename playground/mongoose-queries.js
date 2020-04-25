const {ObjectId} = require('mongodb')


const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '5ea40e7d025a17104cf2ed7a'
//
// if (!ObjectId.isValid(id)){
//   return console.log('id not valid')
// }


// Todo.find({_id: id}).then((todos) =>{
//   console.log('todos=' + todos)
// })
//
//
// Todo.findOne({_id: id}).then((todo) =>{
//   console.log('todo=' + todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('id not found')
//   }
//   console.log('todo by id=' + todo)
// }).catch((e) => {
//   console.log(e)
// })


User.findById('5ea414a90813a20810f52912').then((user) => {
  if (!user){
    return console.log('user not found')
  }
  console.log('user =' + user)
}, (e) => {

})