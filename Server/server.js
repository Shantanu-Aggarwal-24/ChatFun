const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;
require('./src/config/database');
const user_routes = require('./src/user/users.routes');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user is connected :)");

  socket.on("send_message", (data) => {
    console.log("recieved message on server side is", data);
    io.emit("recieved_message", data);
  });

  socket.on("disconnect", () => {
    console.log("XXX...user disconnected..XXX");
  });
});

app.use('/User',user_routes )

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

//setTimeout(()=>{
//     let obj = {
//      channel_name :'Intellect developer',
//      subscribers:'2k+',
//      messages:'Please like this video and subscribe by channel'
//     }
//     socket.emit('customEvent',{data:obj})
// },4000);

// socket.on('clentEvent',(data)=>{
//     console.log("Client data recieved",data)
// })
