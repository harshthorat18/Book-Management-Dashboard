const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// ✅ Enable CORS
server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// ✅ Make /books work
server.use("/books", router);

// ✅ Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
