class Post {
    constructor(titulo, autor, conteudo) {
      this.titulo = titulo;
      this.autor = autor;
      this.conteudo = conteudo;
    }
  }

  novoPost = new Post();

function aoClicar(){
  titulo = document.getElementById('titulo').value
  autor = document.getElementById('autor').value
  conteudo = document.getElementById('conteudo').value


  console.log(titulo,autor,conteudo)

} 
