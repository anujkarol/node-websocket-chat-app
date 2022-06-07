const socket = io();

// socket.on("createEmail", function (newEmail) {
//   console.log("CREATE FROM CLIENT", newEmail);
// });

socket.on("connect", function () {
  console.log("[CLIENT] ---- CONECTED TO SERVER");
  //   socket.emit("createEmail", {
  //     to: "renuprasad@gmail.com",
  //     text: "hello first socket app to RENU",
  //     createdAt: Date()
  //   });

  socket.emit("createMessage", {
    name: "ANUJ SOOD",
    text: "Create message from client"
  });
});

socket.on("disconnect", function () {
  console.log("[CLIENT] ---- DISCONNECTED TO SERVER");
});

// socket.on("createMessage", function () {
//   console.log("[CLIENT] ---- CREATE MESSAGE from CLIENT");
// });

socket.on("newEmail", function (email) {
  console.log("[CLIENT] ---- NEW EMAIL FROM CLIENT", email);
});
