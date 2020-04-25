const except = require('expect')
const request = require('supertest')

const app = require('./../server')
const Todo = require('./../models/todo')
const User = require('./../models/user')



// beforeEach((done) => {
//   Todo.remove({}).then(() => done())
// })

describe('test POST /todos', () => {
  it('should crate todo', (done) => {
    var text = 'test todo text'


    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) =>{
        expect(res.body.text).toBe(text)
      })
      .end((err, response) =>{
        if(err){
          return done(err)
        }

        Todo.find().then((todos) => {
          // except(todos.length).toBe(1)
          except(todos[0].text).toBe(text)
          done()
        }).catch((e) => done(e))
      })
  });
})