
//criar um banco de dados sobre academia

//Código SQL:
// CREATE DATABASE bdacademia

//Para criar utilizando o mongodob usamos

//Para criar uma tabela "personal" em SQL
//Create Table personal(
  // id INT PRIMARY KEY,
  // nome VARCHAR(45),
  // salario decimal(2)
  
  //);
  
//   //COmo criar no mongodb?
//   db.createCollection("personal");
  
//   //Inserir dados no mongodb
//   db.personal.insertOne(
//     {_id:1, nome:"Júlio", salario:3000}
//     );
//     use("bdacademia");
// db.personal.insertOne(
//   {_id:2, nome:"Roni", salario:8000}
// );
// db.personal.insertOne(
//   {_id:3, nome:"Pedro", salario:5000}
// );

//como consultar no mongo
//filtrando dados com mongo
use("bdacademia");
db.personal.find({_id:1});
db.personal.find({_id:1},{nome:true,salario:true,_id:false});

