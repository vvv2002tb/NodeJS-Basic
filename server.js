// const http = require('http');
// const fs = require('fs');
// const { dirname } = require('path');
// const server = http.createServer(function(req, res){
//     // res.writeHead(200, {'Content-Type': 'application/json'}); // khoi tao
//     // let student = [
//     //     {
//     //         name: 'Student',
//     //         age: 13,
//     //     }
//     // ]
//     // res.end(JSON.stringify(student));
//     console.log('nguoi dung yeu cau link: ' + req.url);
//     if(req.url === '/home' || req.url === '/'){ 
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);

//     } else if (req.url === '/login' || req.url === '/dangnhap'){ 
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/login.html', 'utf-8').pipe(res);

//     } else if (req.url === '/api/register'){ 
//         let register =  [{
//             name: 'Vinh Doan Cristian',
//             age: 20,
//             role: 'admin',
            
//         }];
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(register));
       
//     } 
    
// });

// server.listen(3000, '127.0.0.1');
// console.log('Server running on port 3000');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.sendFile(__dirname + '/index.html', 'utf8');
});


app.get('/login', (req, res) => {
    // res.send('Hello World');
    res.sendFile(__dirname + '/login.html', 'utf8');
});

app.get('/contact/:userId/send/:content', (req, res) => {
    res.send('This is contact id: ' + req.params.userId + ' send content ' + req.params.content  )
});



app.listen(3000);