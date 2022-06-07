const path = require("path");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");

const app = express();

app.use(express.static(publicPath));

const port = process.env.port || 3000;

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", function (socket) {
  console.log("[SERVER] ---- NEW USER CONENCTED");
  socket.emit("newEmail", {
    from: "anujkarol@gmail.com",
    text: "hello first socket app",
    createdAt: Date()
  });

  socket.on("createMessage", (message) => {
    console.log("[SERVER] ---- CREATE MESSAGE from CLIENT", message);
  });

  socket.on("createEmail", function (newEmail) {
    console.log("[SERVER] ---- CREATE EMAIL from CLIENT", newEmail);
  });

  socket.on("disconnect", function () {
    console.log("[SERVER] ---- NEW USER DISCONNECTED");
  });
});

server.listen(port, function () {
  console.log("SERVER iS UP");
});
