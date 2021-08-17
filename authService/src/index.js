// import { currentUserRouter } from './routes/current-user';

const express = require('express')

const app = express();
const router = express.Router();

const cors = require('cors');
app.use(express.json());
app.use(cors());

//router Import 
const currentUserRouter = require('./routes/currentUser_route');
const signinRoute = require('./routes/signin_route');
const signupRoute = require('./routes/signup_route');
const signoutRoute = require('./routes/signout_route');

//middle ware import 
const errorHandler = require('./middleware/error-handler');


app.use(currentUserRouter);
app.use(signinRoute);
app.use(signupRoute);
app.use(signoutRoute);
app.use(errorHandler);



app.listen(4000,() => {
    console.log('listening on port 4000')
})