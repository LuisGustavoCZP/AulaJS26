const database = require('../database.js');

function InOrder ()
{
    //console.log(database.clients);
    return database.clients.sort((a, b) => 
    {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });
}

module.exports = { InOrder };