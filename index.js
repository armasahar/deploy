import express from 'express';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5600;  
const app = express();

const buildPath = path.join(__dirname, "build");
if(fs.existsSync(buildPath)){
  app.use(express.static(buildPath));
  app.get(/^\/(?!api).*/, (req,res)=>{
    res.sendFile(path.join(buildPath, "index.html"));
  })
}

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express.js server!' });
})

// app.use('./', (req, res) => {
//   res.json(message'')
// } )
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Internal Server Error");
});
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});