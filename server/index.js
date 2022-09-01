require("dotenv").config()
const express=require('express')
const cors=require('cors')
const morgan = require('morgan');
const connection = require("./db");
const blogRouter=require('./routers/blog.router')
const reviewRouter=require('./routers/review.router')
const authRouter=require('./routers/user.router')
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler')
const app = express()
connection();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*",);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",'GET,PUT,DELETE,POST');
    next();
});
app.use("/",authRouter)
app.use("/",blogRouter);
app.use('/',reviewRouter)
app.use("/",(req, res, next) =>{
    res.sendfile('public/index.html'); 
})
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
