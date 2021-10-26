// import core modules
const express = require('express');
const morgan = require('morgan');

// import author based modules
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

// add my own middleware function
app.use((req, res, next) => {
  console.log('Hello from the middleware!');
  next();
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})

// Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter)

module.exports = app;