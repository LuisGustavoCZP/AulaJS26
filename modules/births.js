const database = require('../database.js');

function ByMount (mount)
{
    //console.log(database.clients, mount);
    return database.clients.reduce((bs, c)=>
    {
        if(c.birthday.mount == mount) bs.push(c);
        return bs;
    }, []);
}

module.exports = { ByMount };