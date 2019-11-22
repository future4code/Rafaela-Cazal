

function cadastrarDados() {
    pessoa = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        email: document.getElementById('email').value,
    }

document.getElementById('inscritos').innerHTML += ('<div class="inscritos">' + '<p>' + 'Nome: ' + pessoa.nome + '</p>' + '<p>' + 'Idade: ' + pessoa.idade + '</p>' + '<p>' + 'E-mail: ' + pessoa.email + '</p>' + '</div>')
document.getElementById('nome').value=''
document.getElementById('idade').value='' 
document.getElementById('email').value=''
}

