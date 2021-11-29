/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const EVENTO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "EVENTO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME_EVENTO" varchar(64),
    "QTD_PESSOAS" varchar(64),
    "ATRACOES" varchar (64),
    "TIPO_INGRESSO" varchar (64),
    "VALOR" real
  );`;

const ADD_EVENTO_DATA = `
INSERT INTO EVENTO (ID, NOME_EVENTO, QTD_PESSOAS,ATRACOES, TIPO_INGRESSO, VALOR)
VALUES 
    (1, 'Festa das Cores', '95' , 'Barões da Pisadinha', 'Open bar', 150.00),
    (2, 'Festa das Cores', '95', 'Barões da Pisadinha', 'Camarote', 250.00),
    (3, 'Festa das Cores', '95','Barões da Pisadinha', 'Camarote', 250.00)
`

function criaTabelaEvento() {
    db.run(EVENTO_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaEvento() {
    db.run(ADD_EVENTO_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize( ()=> {
    criaTabelaEvento();
    populaTabelaEvento();
   
});