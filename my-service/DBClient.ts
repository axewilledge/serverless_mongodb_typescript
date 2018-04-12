import { MongoClient, Db } from "mongodb";

class DbClient {
    
    public db: Db;
    public client; 

    public async connect() { 
        
        try {
           this.client = await MongoClient.connect("mongodb://localhost:27017/");
            // await MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
                
            // if(err) {
            //     console.log(err);
            // } else {
            //     console.log("Connected: Done");
            //     this.db= db.db("moneyworkz");
            // } 
            //  });

            this.client.then((db)=> {
                this.db = db.db("moneyworkz");
            });
        
            return this.db;
        } catch (error) {
            console.log("Unable to connect to db");
        }
        
    }
}

export = new DbClient();