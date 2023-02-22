import { createServer } from "./src/server";

const PORT = process.env.PORT || 3000;
const app = createServer();

//Server
app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
