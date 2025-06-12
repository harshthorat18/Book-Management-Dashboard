const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use("/", router);

console.log("Books route initialized");

// Log data for debugging
console.log("DB Contents:", router.db.getState());

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}/books`);
});
