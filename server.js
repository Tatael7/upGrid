const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log(`App is listening on http://localhost:${PORT}`);
})