// init
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// mogoDB
const db = require('./config/db');

// route
const route = require('./routes');

// Override method
const methodOverride = require('method-override');

/* libs */
// out logger in terminal
app.use(morgan('combined'));
// Template engine (handlebars)
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
        sum: (a, b) => a + b // handle auto increase stt
    },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// Middleware --> Hanlde Form data with method POST (req.body)
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json()); // handle with code javascript.

// handle img
app.use(express.static(path.join(__dirname, 'public')));

// Override method (Submit method type POST --> PUT)
app.use(methodOverride('_method'));

// Routes init (tuyến đường)
route(app);

// Connection to mogoDB
db.connect();


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});