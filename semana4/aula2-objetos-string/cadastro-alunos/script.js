

function cadastrarDados() {
const nome = document.getElementById('name').value='';
const idade = document.getElementById('idade').value=''; 
const email = document.getElementById('email').value='';
const container = document.getElementById('container')

const inscritos = document.getElementById('inscritos')
inscritos.innerHTML += "<p>" + nome + "</p>"
inscritos.innerHTML += "<p>" + idade + "</p>"
inscritos.innerHTML += "<p>" + email + "</p>"

}

