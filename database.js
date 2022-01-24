const { randomInt } = require("crypto");

const clients = [];

function Date (_day, _mount, _year)
{
    return {day:_day, mount:_mount, year:_year};
}

function Client (_name, _ramal, _email, _sector, _birthday) 
{
    const newclient = {
        "number":clients.length,
        "name":_name,
        "ramal": _ramal,
        "email": _email,
        "sector": _sector,
        "birthday": _birthday
    };
    clients.push(newclient);
    return newclient;
}

function CreateRandom (n)
{
    const nomes = ["Joao","Claudia","Marta","Jose","Carlos","Maria","Ricardo","Carol","Pedro","Joana","Gustavo","Vitoria","Caique","Felipe","Flavia","Talita","Gabriela","Renato","Yan"];
    const sobrenomes = ["Santos","Pereira","Ferreira","Silva","Carvalho","Rocha",];
    
    for(let i = 0; i < n; i++)
    {
        const name = `${nomes[randomInt(0, nomes.length-1)]} ${sobrenomes[randomInt(0, sobrenomes.length-1)]}`;
        const ramal = parseInt(`${randomInt(0, 9)}${randomInt(0, 9)}${randomInt(0, 9)}`);
        const email = `${name.replace(" ", "")}@gmail.com`;
        const sector = `${randomInt(0, 3)}`;
        const birth = Date(randomInt(1, 30), randomInt(1, 12) , randomInt(1980, 2000));
        Client(name, ramal, email, sector, birth);
    }
}

module.exports = 
{
    clients,
    Client,
    CreateRandom
};