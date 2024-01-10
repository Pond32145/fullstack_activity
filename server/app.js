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

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

const mysql = require('mysql2');
// create the connection to database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'activitydb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.post('/register', jsonParser, (req, res, next) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

        pool.execute(
            'INSERT INTO user (username, password, fname, lname, section, role) VALUES (?,?,?,?,?,?)',
            [req.body.username, hashedPassword, req.body.fname, req.body.lname, req.body.section, 'student'],
            (err, results, fields) => {
                if (err) {
                    res.json({ status: 'error', message: err });
                    return;
                }
                res.json({ status: 'ok' });
            }
        );
    } catch (error) {
        res.json({ status: 'error', message: error.message });
    }
});


//เพิ่มข้อมูล user จำนวนมากผ่าน POSTMAN ด้วย JSON
app.post('/addusers', jsonParser, (req, res, next) => {
    try {
        const users = req.body;  // สมมุติว่า req.body เป็น array ของผู้ใช้

        users.forEach(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);

            pool.execute(
                'INSERT INTO user (username, password, fname, lname, section, role) VALUES (?,?,?,?,?,?)',
                [user.username, hashedPassword, user.fname, user.lname, user.section, 'student'],
                (err, results, fields) => {
                    if (err) {
                        console.error('Error inserting user:', err);
                        return;
                    }
                    console.log('User inserted:', results);
                }
            );
        });

        res.json({ status: 'ok' });
    } catch (error) {
        res.json({ status: 'error', message: error.message });
    }
});


app.post('/login', jsonParser, function (req, res, next) {
    pool.execute(
        'SELECT * FROM user WHERE username=?',
        [req.body.username],
        function (err, user, fields) {
            if (err) {
                res.json({ status: 'error', message: err });
                return;
            }
            if (user.length == 0) {
                res.json({ status: 'error', message: 'no user found' });
                return;
            }
            bcrypt.compare(req.body.password, user[0].password, function (err, isLogin) {
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
                    res.json({ status: 'error', message: 'Login Failed' });
                }
            });
        }
    );
});


app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret);
        res.json({ status: 'ok', decoded })
    } catch (error) {
        res.json({ status: 'error', message: error.message })
    }

})

app.get('/api/user', (req, res) => {
    pool.query('SELECT * FROM user', (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});


app.get('/api/userO', (req, res) => {
    const { username } = req.query;
    const query = 'SELECT * FROM user WHERE username = ?';

    pool.query(query, [username], (err, results) => {
        if (err) {
            console.error('Error fetching user data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        if (results.length > 0) {
            console.log('User data:', results[0]);
            res.json(results[0]);
        } else {
            console.log('User not found');
            res.status(404).json({ message: 'User not found' });
        }
    });
});

//ส่วนของกิจกรรม

app.post('/activity', function (req, res) {
    pool.query(
      'INSERT INTO actname(`act_Name`, `start_Date`, `end_Date`) VALUES (?,?,?)',
      [req.body.actName, req.body.startDate, req.body.endDate],
      function (err, results) {
        if (err) {
          console.error('Error inserting into database:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
      }
    );
  });
  
  app.post('/actcode', function (req, res) {
    pool.query('INSERT INTO actcode(`act_Code`, `act_Name`) VALUES (?,?)',
      [req.body.actCode, req.body.actName],
      function (err, results) {
        if (err) {
          console.error('Error inserting into database:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(results);
        }
      }
    );
  });
  
//   app.get('/check', function (req, res) {
//     const actCodeParam = req.query.actCode;
  
//     if (!actCodeParam) {
//       return res.status(400).json({ error: 'actCode is required in the query parameters' });
//     }
  
//     pool.execute(
//       'SELECT actname.*, actcode.act_Code FROM actname INNER JOIN actcode ON actname.act_Name=actcode.act_Name WHERE act_Code = ?',
//       [actCodeParam],
//       function (errS, resultsS) {
//         if (errS) {
//           console.error('Error querying the database:', errS);
//           res.status(500).json({ error: 'Internal Server Error' });
//         } else {
//           console.log("Join activity successfully");
  
//           // เพิ่มตรวจสอบก่อนที่จะอ้างถึง 'act_Code'
//           const DactCodeParam = resultsS[0] && resultsS[0].act_Code;
  
//           // เพิ่มการตรวจสอบว่า DactCodeParam มีค่าหรือไม่
//           if (DactCodeParam) {
//             pool.execute('DELETE FROM actcode WHERE act_Code = ?',
//               [DactCodeParam],
//               function (errD, resultsD) {
//                 if (errD) {
//                   console.error('Error deleting from the database:', errD);
//                   res.status(500).json({ error: 'Internal Server Error' });
//                 } else {
//                   console.log("Deleting Successfully");
//                   res.json(resultsD);
//                 }
//               });
//           } else {
//             console.error('DactCodeParam is undefined or null');
//             res.status(500).json({ error: 'Internal Server Error' });
//           }
//         }
//       }
//     );
//   });
  

app.listen(3333, jsonParser, function () {
    console.log('CORS-enabled web server listening on port 3333')
}) 