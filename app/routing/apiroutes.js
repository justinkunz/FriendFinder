
require('../data/connection.js')()
var logic = require('../logic/logic.js')

function calls(app) {
 
    //post call for new result
    app.post('/api/new_response', function (req, res) {

        newData = req.body

        conn.query('select * from user_info', function (err, data) {
            bef = data
        })

        conn.query('insert into user_info (user_data) values(?)',
            [JSON.stringify(newData)],
            function (err, data) {
                if (err) {
                    res.status(500).end()
                    console.log('error' + err)
                }

                res.json(logic(newData.answers, bef))
            }

        )

    });

    //view all api
    app.get('/api/all', function (req, res) {
        conn.query('select * from user_info', function (err, data) {
            res.json(data)
        })
    });

    app.get('/api/answers', function(req, res){
        userId = req.headers.referer.split('/')[4]
        console.log(userId)
        conn.query('select * from user_info where ?', {
            id: userId
        }, function(err, data){
            console.log(data)
            res.json(data)
        })
    })

}
module.exports = calls