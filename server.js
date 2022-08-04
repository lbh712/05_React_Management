const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();
const customers =[
    {
        'id': 1,
        'image': "https://placeimg.com/64/64/1",
        'name': '홍길동',
        'birthday': 901223,
        'gender': '남자',
        'job': '대학생'
    },
    {
        'id': 2,
        'image': "https://placeimg.com/64/64/2",
        'name': '강철수',
        'birthday': 891223,
        'gender': '남자',
        'job': '기자'
    },
    {
        'id': 3,
        'image': "https://placeimg.com/64/64/3",
        'name': '김영희',
        'birthday': 871223,
        'gender': '여자',
        'job': '연구원'
    }
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', function (request, response) {
    response.send(customers);
});

app.listen(5000, function () {
    console.log('Server Running at http://127.0.0.1:5000');
});