import { Handler, Context, Callback } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = (event: any, context: Context, callback: Callback) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10)
    })
  };

  callback(undefined, response);
};






// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";



// module.exports.hello = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

  

//   callback(null, response);

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
// };




// module.exports.getOffers = (event, context, callback) => {
//   let offers;

  // let test = service.getOffers();
  // console.log("TEST TEST: " + test);

  // MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("moneyworkz");
//     dbo.collection("offers").find({}).toArray(function(err, result) {
//       if (err) throw err;
      
//       console.log(result);
//       offers = result;
//       db.close();

//       const response = {
//         statusCode: 200,
//         body: JSON.stringify(offers),
//       };

//       callback(null, response);

//     });
//   });
// };

//   module.exports.filterOffers = (event, context, callback) => {
//     let offers;
  
//     MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("moneyworkz");

      

//       dbo.collection("offers").find({ $text : { $search : event.pathParameters.phrase}}).toArray(function(err, result) {
//         if (err) throw err;
        
//         console.log(result);
//         offers = result;
//         db.close();
  
//         const response = {
//           statusCode: 200,
//           body: JSON.stringify(offers),
//         };
  
//         callback(null, response);
  
//       });
//     });
//   };