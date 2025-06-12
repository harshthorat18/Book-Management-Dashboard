const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Enable CORS
server.use(cors());

// Middleware (logging, static, etc.)
server.use(middlewares);

// Enable POST, PUT, DELETE body parsing
server.use(jsonServer.bodyParser);

// All routes will be prefixed with /books
server.use("/books", router);

// Log current DB (optional for debugging)
console.log("Books route initialized");

// Set port for Render
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running at http://localhost:${PORT}/books`);
});
