const mongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect( mongoUrl, (error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        // console.log("Connection Successful");

        const actualDb = success.db("construction")

        const tempObj = {item: "cement", quantity: 3};

        const tempObj2 = {item: "cement"};

        const tempObj3 = {quantity: 10};

        const tempArr = [
            {item: "hammer", quantity: 15},
            {item: "drill", quantity: 7}
        ]

        // actualDb.createCollection("rawData", (err, succ) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     else {
        //         console.log("Collection Created");
        //         // success.close();
        //     }
        // })

        // actualDb.collection("rawData").insertOne(tempObj, (err, succ) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Document created successfully!");
        //     }
        // })

        // actualDb.collection("rawData").insertMany(tempArr, (err, succ) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Multiple Docs were added");
        //     }
        // })

        // actualDb.collection("rawData").find().toArray( (err, result) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(result);
        //     }
        // })

        // actualDb.collection("rawData").deleteOne(tempObj, (err, succ) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("The Document was Deleted");
        //     }
        // })

        // actualDb.collection("rawData").updateOne(tempObj2, {$set: tempObj3}, (err, succ) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("The Document was Updated!");
        //     }
        // })

        // actualDb.collection("rawData").deleteMany(tempObj2, (err, succ) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Deleted all the Cement Docs!");
        //     }
        // })

        actualDb.collection("rawData").deleteMany({quantity: {$lt: 15}}, (err, succ) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Docs with qty less than 15 were deleted!");
            }
        })
    }

    // success.close();
})






// MongoClient.connect(dbUrl,(err,db)=>{
//     if(err) console.log(err)
//     var dbse = db.db("construction")
//     dbse.createCollection("rawData", (err, suc)=>{
//         console.log("collection created");
//         db.close()
//     })
// })


