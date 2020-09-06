import express from 'express';
import bodyParser from 'body-parser';
import mongoose from './config/dbconfig';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, useUnifiedTopology: true  }))
app.use(bodyParser.json())
mongoose.Promise = global.Promise;
app.get('/', (req, res) => {
    res.json({"message": "Welcome to My Blog Backend. "});
});

app.post("/create", function (req, res) {
    const email = req.body.email;
    res.status(200).json({
      status: 200,
      email,
    });
  });
require('./routes/blog.routes')(app);

app.use("/api/v1/",require('./routes/user_router'));
const port = process.env.PORT || 2300;
 app.listen(port, () => {
     console.log(`Server is listening on port ${port}....`);
 });