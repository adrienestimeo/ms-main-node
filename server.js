/**
 * Created at 09/01/2018
 * By Adrien Fenech
 */
const express = require('express');
const http = require('http');

const path = require('path');
const rootDir = 'dist';

const app = module.exports.app = exports.app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

/**
 * Port use by the application
 */
const port = 8081;
/**
 *
 */


app.disable('x-powered-by');

app.use(express.static(rootDir));
app.set('views', path.join(rootDir, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/*', jsonParser);
require('./routes/_')(app);

const server_http = http.createServer(app);
server_http.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        /**
         * Server is up
         * App is now ready to be used
         */
        console.log('#Server UP#');

        const MM = require('ms-manager');
        let config = require(`./config.json`) || {};

        console.log(config);
        MM.init(config, (err, serviceInfo) => {
            if (err) {
                return console.error(err);
            }
            console.log(serviceInfo);

            /**
             * Our micro-service is now up.
             * */
            console.log('#Micro-service UP#');
        });
    }
});