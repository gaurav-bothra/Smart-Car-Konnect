let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let flash = require('connect-flash');
let exphbs  = require('express-handlebars');
let path = require('path');

let compression = require('compression');
let helmet = require('helmet');


require('dotenv').config();

let app = express();

//setting view Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//setting static folder
app.use(express.static(path.join(__dirname, './public')));

//MiddleWare
app.use(compression());
app.use(helmet());

app.use(session({
    resave:false,
    secret: 'karconnect',
    saveUninitialized:true
}));

app.use(flash());

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`App is running at ${process.env.SERVER_PORT}`);
});