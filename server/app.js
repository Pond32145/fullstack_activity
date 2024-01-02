var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login'

app.use(cors())

const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'activitydb'
});

app.post('/register', jsonParser, function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
        connection.execute(
            'INSERT INTO user (username, password, fname, lname, section, role) VALUE (?,?,?,?,?,?)',
            [req.body.username, hash, req.body.fname, req.body.lname, req.body.section, 'user'],
            function (err, results, fields) {
                if (err) {
                    res.json({status: 'error', message:err})
                    return;
                } 
                res.json({ status: 'ok' });
            }
        );
    });
});



app.post('/login', jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM user WHERE username=?',
        [req.body.username],
        function (err, user, fields) {
            if (err) { 
                res.json({status: 'error', message:err});
                return;
            } 
            if (user.length == 0) { 
                res.json({status: 'error', message:'no user found'});
                return;
            }
            bcrypt.compare(req.body.password, user[0].password, function(err, isLogin) {
                if (isLogin) {
                    var token = jwt.sign({ 
                        username: user[0].username,
                        role: user[0].role, // เพิ่มบทบาทใน token
                    }, secret, { expiresIn: '1h' });
                    res.json({
                        status: 'ok',
                        message: 'Login Success',
                        token,
                        role: user[0].role, // ส่งบทบาทในการตอบกลับ
                    });
                } else {
                    res.json({status: 'error', message:'Login Failed'});
                }
            });
        }
    );
});


app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret );
        res.json({status: 'ok',decoded})
    } catch (error) {
        res.json({status: 'error', message: error.message})
    }

})

app.get('/api/user', (req, res) => {
    connection.query('SELECT * FROM user', (err, results) => {
      if (err) {
        console.error('Error querying MySQL:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json(results);
    });
  });

app.listen(3333, jsonParser, function () {
    console.log('CORS-enabled web server listening on port 3333')
}) 