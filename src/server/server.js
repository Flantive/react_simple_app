/* jshint esversion: 6 */

const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');

const app     = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '..', '..', 'dist/client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const Router = require(path.join(__dirname, 'router.js'));
const rtr    = new Router(app);
rtr.init();

app.listen(app.get('port'), () => {
  console.log(`Server listening on: http://localhost:${app.get('port')}`);
});

module.exports = app;
