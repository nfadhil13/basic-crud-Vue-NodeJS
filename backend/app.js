const express = require('express');
const bodyParser = require('body-parser');
const artikelRoutes = require('./routes/artikel');

const app = express();

const Artikel = require('./model/artikel');
const Author = require('./model/author');
const sequelize = require('./util/database');

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/artikel', artikelRoutes);



Artikel.belongsTo(Author ,{
    constraints : true,
    onDelete : 'CASCADE'
})
Author.hasMany(Artikel)


const init = async () => {
    try{
        const syncDB = await sequelize.sync({})
        app.listen(8080)
    }catch(err){
        console.log(err)
    }
}

init()
