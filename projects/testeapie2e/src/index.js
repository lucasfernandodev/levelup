import Server from "./server.js"

const server = Server.listen(6666)
.on("listening", () => console.log(`running at ${server.address().port}`))