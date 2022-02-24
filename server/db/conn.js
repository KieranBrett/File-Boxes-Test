const { MongoClient } = require("mongodb");
// Ideally this file would be in a separate folder, but for the sake of simplicity, we'll keep it here.
// In a real world situation we would also ignore the file so the database credentials arent made public
const Db = "mongodb+srv://dbAdmin:GNzEXqIC1fnQxgse@csvmanager.2ckt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};