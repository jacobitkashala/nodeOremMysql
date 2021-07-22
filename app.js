let express = require('express');
let app = express();
let apiRouter = require('./apiRouter').router;

app.use(json())

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1> bonjour</h1>');
})
app.use('/api/', apiRouter);

app.listen(8080, () => { console.log(8080) })