const connection = require("../config/connection.js");

module.exports = function(app) {
    app.get("/api/all", function(req,res) {
        let dbQuery = "SELECT * FROM clients";
        connection.query(dbQuery, function(err,result) {
            if(err) throw(err);
            res.json(result);
        })
    });


    app.post("/api/new", function(req,res){
        console.log(`client data`);
        console.log(req.body);
       let dbQuery = "INSERT INTO clients (name, number, address, email, bill) VALUES(?,?,?,?,?)";
       console.log(dbQuery)
       connection.query(dbQuery, [req.body.name, req.body.number, req.body.address, req.body.email, req.body.bill], function(err,result){
            if(err) throw err;
           console.log("client added");
           res.end();
       });
    });
};