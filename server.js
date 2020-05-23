var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nuno:nuno@cluster0-kmbj1.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection succeded');
});

var schema = new mongoose.Schema({
    name: String
});

var SchemaModel = mongoose.model('SchemaModel', schema);

var toInsert = new SchemaModel({ name: 'Test' });

toInsert.save(function (err) {
    if (err) return console.error(err);
    else console.log("inserted");
});

SchemaModel.find(function (err, retrievedObjects) {
    if (err) return console.error(err);
    console.log(retrievedObjects);
})