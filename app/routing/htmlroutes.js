var path = require('path')
var static = path.join(__dirname, '../public')

module.exports = function (app) {
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(static, 'survey.html'))
    });

    app.get('/', function (req, res) {
        res.sendFile(path.join(static, 'home.html'))
    });

    app.get('/:ast', function (req, res) {
        res.sendFile(path.join(static, 'assets',req.params.ast))
    });
}