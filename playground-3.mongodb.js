use("bdacademia");
db.dropDatabase();
use("bdacademia");
db.createCollection("personal");
db.personal.insertMany([
    {_id:1,
        nome:"Júlio",
        salario:3000, 
        alunos:[
            {
                nome:"Tere",
                idade:28
            },
            {
                nome:"João",
                idade:34
            },
            {
                nome:"Pedro",
                idade:60
            }
        ]
    },
    {_id:2,nome:"Adriano",salario:3000,alunos:[]},
    {_id:3,nome:"Thaina",salario:4000,alunos:[]}
])

//Como apagar algum dado de uma collection
// db.personal.drop() //Apaga uma collection
// db.personal.find()

db.personal.deleteMany({})

db.createCollection("treino");
db.treino.insertOne(
  {
    
    dia:"Segunda",
    nome:"Quadriceps",
    exercicios:[
      {
        nome:"Agachamento Livre",
        serie:5,
        repeticoes:12,
        peso:100
      },
      {
        nome:"Leg 45",
        serie:5,
        repeticoes:12,
        peso:200
      },
      {
        nome:"Agachamento Hack",
        serie:5,
        repeticoes:12,
        peso:200
      },
      {
        nome:"Extensora",
        serie:5,
        repeticoes:12,
        peso:200
      }
    ]
  }
)
db.treino.insertOne(
  {
    
    dia:"Segunda",
    nome:"Costas",
    exercicios:[
      {
        nome:"Barra Fixa",
        serie:5,
        repeticoes:6,
        peso:20
      },
      {
        nome:"Remada Baixa",
        serie:4,
        repeticoes:15,
        peso:60
      },
      {
        nome:"Remada Cavalo",
        serie:5,
        repeticoes:12,
        peso:80
      },
      {
        nome:"Puxada Alta",
        serie:5,
        repeticoes:12,
        peso:70
      }
    ]
  }
)

use("bdacademia")
//db.treino.find({})
//db.treino.find({nome:"Costas"})
db.treino.find({_id:ObjectId ("64f866dd30773953278c3fff")})

use("bdacademia")
db.treino.updateOne(
  {_id:ObjectId ("64f866dd30773953278c3fff")},
  {
    $set:{dia:"Sexta"}
  }
)

use("bdacademia")
db.treino.updateOne(
  {_id:ObjectId("64f866dd30773953278c3fff"),"exercícios.nome":"Puxada Alta"},
  {
    $set:{
      dia:"Sexta",
      "exercicios.$.repeticoes":15,
      "exercicios.$.serie":4,
      "exercicios.$.peso":80
    }
  }
)