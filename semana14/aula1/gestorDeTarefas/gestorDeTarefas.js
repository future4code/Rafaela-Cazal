// exercicio 2


const fs = require('fs');
const newTask = process.argv[3];
const fileName = "tarefas.txt";
const red   = '\u001b[31m';
const green = '\033[0;32m';

try{
    fs.appendFileSync(fileName, newTask);
    console.log(`${green} Tarefa adicionada com sucesso!`)
} catch(err){
    console.log(`${red} Erro ao adcionar tarefa`)
}