import { Handler, Context, Callback } from 'aws-lambda';
// import DbClient = require("./DbClient");
import { MongoClient, Db  } from "mongodb";

interface HelloResponse {
  statusCode: number;
  body: string;
}


const getOffers : Handler = async (event: any, context: Context, callback: Callback) => {
  
  // let db = await DbClient.connect();
  try {

    MongoClient.connect("mongodb://localhost:27017/", (err, db) => {

    if(err) {
        console.log(err);
    } else {
        console.log("Connected: Done");
        this.db= db.db("moneyworkz");
        let results;
        this.db.collection("offers")
                .find({})
                  .toArray( function(err, result){

                    console.log(result);                   

                    const response: HelloResponse = {
                      statusCode: 200,
                      body: JSON.stringify(result)
                    };
                    callback(undefined, response);
                    
                  });
        
      } 
      });

    // return this.db;
    } catch (error) {
        console.log("Unable to connect to db");
    }

};



const filterOffers : Handler = async (event: any, context: Context, callback: Callback) => {
  
  // let db = DbClient.connect();
  try {

    MongoClient.connect("mongodb://localhost:27017/", (err, db) => {

    if(err) {
        console.log(err);
    } else {
        console.log("Connected: Done");
        this.db= db.db("moneyworkz");
        let results;
        this.db.collection("offers")
              .find({ $text : { $search : event.pathParameters.phrase}})
                  .toArray( function(err, result){

                    console.log(result);                   

                    const response: HelloResponse = {
                      statusCode: 200,
                      body: JSON.stringify(result)
                    };
                    callback(undefined, response);
                    
                  });
        
      } 
      });

    return this.db;
    } catch (error) {
        console.log("Unable to connect to db");
    }

};




export { getOffers, filterOffers }