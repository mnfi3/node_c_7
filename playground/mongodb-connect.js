const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) =>{
  if(err){
    return console.log('unable to connect to mongo server!')
  }

  console.log('connecte to mongo server')

  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'something',
    completed: false,
  }, (err, result) => {
    if(err){
      return console.log('unable to write to mongo error = ' + err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  })


  client.close();
});