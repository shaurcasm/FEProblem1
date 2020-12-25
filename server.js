// Express server. Back-end data-relaying, mild security and serving the SPA.

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');
const helmet = require('helmet');

const TOKEN_API = "https://findfalcone.herokuapp.com/token";
const FIND_API = "https://findfalcone.herokuapp.com/find";

const app = express();
const port = process.env.PORT || 9000;

// Async function to get result from provided link, with selected Options as Body.
const getResult = async (requestBody) => {
    var requestOptions = {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: requestBody
    }
    var response = await fetch(FIND_API, requestOptions);
    var result = await response.json();
    //console.log("Result = " + JSON.stringify(result));
    
    return result;
}

// Async function get token from provided link.
const getToken = async () => {
    var requestOptions = {
        method: 'POST',
        headers: { 'Accept': 'application/json' }
    }
    var response = await fetch(TOKEN_API, requestOptions);
    var tokenObject = await response.json();
    //console.log('Token = ' + JSON.stringify(tokenObject));

    return tokenObject.token;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet({
    frameguard: {
        action: 'deny'
    },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
        },
        frameguard: {
            action: 'deny'
        }
    }
}));
app.use('/public', express.static(__dirname + '/public'));

// Hosted by this server to process received UI input, getToken; send them to getResult.
app.route('/api/getResult')
    .post(async (req, res) => {
        //console.log("Accessed api route.");
        var token = await getToken();
        //console.log("Completed Token.");

        var attemptObject = {}; // e.g. {token: 'ladida', planetnames:[], vehiclenames:[]}
        attemptObject['token'] = token;
        attemptObject['planet_names'] = req.body['planet_names'];
        attemptObject['vehicle_names'] = req.body['vehicle_names'];
        //console.log("Attempt Object = " + JSON.stringify(attemptObject));

        var result = await getResult(JSON.stringify(attemptObject));
        //console.log('Result = ' + JSON.stringify(result));

        res.send(result)
    });

if(process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Will need to look further with react-router
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

app.get('/', (req, res) => {
    res.render('./views/index.html');
});

app.listen(port, () => console.log(`Listening on port ${port}`));