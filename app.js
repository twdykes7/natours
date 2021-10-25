// import core modules
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

// import author based modules
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());

// add my own middleware function
app.use((req, res, next) => {
  console.log('Hello from the middleware!');
  next();
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})

// Route Handlers

// Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter)

// Start Server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
