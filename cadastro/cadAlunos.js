const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 10000
}
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error ; '))
db.once('open',function(){
    console.log("estamos conectados")
})

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
});

const Alunos = mongoose.model('Alunos', alunoSchema)

const carlos = new Alunos({
    matricula:'rm15301',
    nome :'carlos silva',
    idade : 18,
    turma : '2mib'
})

carlos.save();

const maria = new Alunos({
    matricula:'rm14301',
    nome :'maria jose',
    idade : 17,
    turma : '2mib'
})

maria.save();