//  tipo de objeto de post
type dadosDosPosts = {
    autor: string,
    texto: string,
};

const primeiroPost: dadosDosPosts = {
    autor: "Rafaela",
    texto: "Música fav: born this way - lady gaga"
}

const segundoPost: dadosDosPosts = {
    autor: "Rafaela",
    texto: "Comida fav: parmegiana de frango"
}

const terceiroPost: dadosDosPosts = {
    autor: "Eliana",
    texto: "terceiro post"
}

const quartoPost: dadosDosPosts = {
    autor: "Fernanda",
    texto: "quarto post"
}

const quintoPost: dadosDosPosts = {
    autor: "Manoel",
    texto: "quinto post"
}

//  array com os objetos do tipo dadosDosPosts
const arrayDePosts: dadosDosPosts[] = [primeiroPost, segundoPost, terceiroPost, quartoPost, quintoPost];


function filtrarAutor(arrayDePosts: dadosDosPosts[], autor: string) {
    const filtroDePosts: dadosDosPosts[] = arrayDePosts.filter((post) => {
        return post.autor === autor
    })
    return filtroDePosts
}

const autorFiltrado: dadosDosPosts[] = filtrarAutor(arrayDePosts, "Rafaela")
console.log(autorFiltrado)  