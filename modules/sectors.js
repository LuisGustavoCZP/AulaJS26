const database = require('../database.js');

function BySector (number)
{
    //console.log(database.clients, number);
    return database.clients.reduce((bs, c)=>
    {
        if(c.sector == number) bs.push(c);
        return bs;
    }, []);
}

module.exports = { BySector };