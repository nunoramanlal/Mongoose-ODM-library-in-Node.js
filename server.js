const mongoose = require('mongoose');
const Schema = require('./SchemaModel');

mongoose.connect('mongodb+srv://nuno:nuno@cluster0-kmbj1.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection succeeded');
});

const toInsert = new Schema({ name: 'Test' });

Schema.deleteMany({ name: 'Test' }, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion");
});

toInsert.save(function (err) {
    if (err) return console.error(err);
    else console.log("inserted");
});

Schema.find(function (err, retrievedObjects) {
    if (err) return console.error(err);
    console.log(retrievedObjects);
})
