let express = require('express')
let app = express()

let cors = require('cors');
let bodyParser = require('body-parser');
let logger = require('morgan');
let helmet = require('helmet');
let crypto = require('crypto');

let axios = require('axios')

let config = require('./config.js');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
logger('tiny')
app.use(helmet());

let ts = new Date().getTime();
let hash = crypto.createHash('md5').update(ts + config.private_key + config.api_key).digest('hex');
let api_url = config.base_url + '?limit=20&offset=100&ts=' + ts + '&apikey=' + config.api_key + '&hash=' + hash;

app.get('/', (req, res) => {

    axios.get(api_url).then((response) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(response.data);
    }).catch(function (err) {
        if (response.status === 409) {
            console.log(response.data);
        }
    })
})

app.get('/character/:id', (req, res) => {

    axios.get(config.base_url + `/${req.params.id}?ts=` + ts + '&apikey=' + config.api_key + '&hash=' + hash).then((response) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(response.data)
    })

});

app.listen(3000, function () {
    console.log('Listened on port 3000!')
})