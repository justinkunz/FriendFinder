module.exports = function () {

    var sql = require('mysql')
    if (process.env.JAWSDB_URL) {
        conn = sql.createConnection(process.env.JAWSDB_URL)
    }
    else {
        conn = sql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'password',
            database: 'friend_finder_db'
        })
    }
    conn.connect(function (e) {
        if (e) {
            console.log('error: ' + e.stack)
        }
        else {
            console.log('connected to sql as ID: ' + conn.threadId)
        }
    });
}
