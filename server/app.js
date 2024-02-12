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
// app.use(bodyParser.json());
// app.use(express.json());



// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

const mysql = require('mysql2');
// create the connection to database
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'activitydb',
});



//  login
app.post('/login', jsonParser, function (req, res, next) {
    connect.execute(
        'SELECT * FROM user WHERE username=?', [req.body.username],
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

// ตรวจสอบการเข้าใช้
app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret);
        res.json({ status: 'ok', decoded })
    } catch (error) {
        res.json({ status: 'error', message: error.message })
    }

})


//create
app.post('/create', jsonParser, (req, res, next) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

        connect.execute(
            'INSERT INTO user (username, password, fname, lname, section, role) VALUES (?,?,?,?,?,?)',
            [req.body.username, hashedPassword, req.body.fname, req.body.lname, req.body.section, req.body.role],
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

            connect.execute(
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



// read ดึงข้อมูลของ users
app.get('/api/user', (req, res) => {
    connect.query('SELECT * FROM user', (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

// update 


app.patch('/api/update/:id', jsonParser, (req, res) => {
    const { id } = req.params;
    const { fname, lname, section, tel, birthdate, address, district, province, tumbons, zipcode } = req.body;

    connect.execute('UPDATE user SET fname = ?, lname = ?, section = ?, tel = ?, birthdate = ?, address = ?, district = ?, province = ?, tumbons = ?, zipcode = ? WHERE username = ?',
        [fname, lname, section, tel, birthdate, address, district, province, tumbons, zipcode, id],
        (err, result) => {
            if (err) {
                console.error('Error querying MySQL:', err);
                res.status(500).send('Internal Server Error: ' + err.message); // Send error details to the client
                return;
            } else {
                res.json(result);
                console.log('Update successfully');
            }
        });
});







app.get('/api/userO', (req, res) => {
    const { id } = req.query;
    const query = 'SELECT * FROM user WHERE username = ?';

    connect.query(query, [id], (err, results) => {
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

    console.query
});

//ส่วนของกิจกรรม

app.post('/activity', jsonParser, function (req, res) {
    connect.query(
      'INSERT INTO actname(`act_Name`, `start_Date`, `location`, `amount`, `end_Date`) VALUES (?,?,?,?,?)',
      [req.body.actName, req.body.startDate,req.body.location, req.body.amount, req.body.endDate],
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
  
app.post('/actcode', jsonParser, function (req, res) {
    connect.query('INSERT INTO actcode(`act_Code`, `act_Name`) VALUES (?,?)',
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



app.get('/api/activity', (req, res) => {
    connect.query('SELECT * FROM actname', (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

app.post('/add_activity', (req, res) => {
    const { activityCode, activityName, cardCode } = req.body;
  
    // Check if the activity code exists in the database
    const checkActivityQuery = `SELECT * FROM act_std WHERE activityCode = ?`;
  
    connect.query(checkActivityQuery, [activityCode], (err, results) => {
      if (err) {
        console.error('Error checking activity:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      if (results.length > 0) {
        // Activity code exists, delete from the original table
        const deleteQuery = `DELETE FROM act_std WHERE activityCode = ?`;
  
        connect.query(deleteQuery, [activityCode], (deleteErr, deleteResults) => {
          if (deleteErr) {
            console.error('Error deleting activity:', deleteErr);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }
  
          // Insert into the new table
          const insertQuery = `INSERT INTO new_table_name (activityCode, activityName, cardCode) VALUES (?, ?, ?)`;
  
          connect.query(insertQuery, [activityCode, activityName, cardCode], (insertErr, insertResults) => {
            if (insertErr) {
              console.error('Error inserting activity:', insertErr);
              res.status(500).json({ error: 'Internal Server Error' });
              return;
            }
  
            res.status(200).json({ message: 'Activity added successfully' });
          });
        });
      } else {
        res.status(404).json({ error: 'Activity code not found' });
      }
    });
  });
  

app.listen(3333, jsonParser, function () {
    console.log('CORS-enabled web server listening on port 3333')
}) 