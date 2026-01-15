import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample route

app.get('/', (req, res) => {
  res.json('Hello World!');
});
app.post('/submit',(req,res)=>{
    let {username,password}=req.body;
    console.log(req.body);
    res.send({username,password});
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
