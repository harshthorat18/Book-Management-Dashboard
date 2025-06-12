const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");


server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);


server.use("/books", router);
console.log("Books route:", router.db.getState());


const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
