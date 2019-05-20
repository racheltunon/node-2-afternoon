const express =require('express')
const app = express();
app.use(express.json()); //middleware that express gives us for free//
app.use(express.static(__dirname + '/../public/build'))


const mc = require("./controllers/messages_controller");

app.post("/api/messages", mc.create);
app.get("/api/messages", mc.read);
app.put("/api/messages/:id", mc.update);
app.delete("/api/messages/:id", mc.delete);

app.listen(3001, ()=> {
    console.log("Server listening on 3001")
})
