// exercicio 2

const fs = require('fs');
const newTask = process.argv[3];
const fileName = "tarefas.txt";

try{
    fs.appendFileSync(fileName, newTask);
    console.log("Tarefa adicionada com sucesso!")
} catch(err){
    console.log("Erro ao adcionar tarefa")
}