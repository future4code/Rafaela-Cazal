const primeiroPost = {
    autor: "Rafaela",
    texto: "Música fav: born this way - lady gaga"
};
const segundoPost = {
    autor: "Rafaela",
    texto: "Comida fav: parmegiana de frango"
};
const terceiroPost = {
    autor: "Eliana",
    texto: "terceiro post"
};
const quartoPost = {
    autor: "Fernanda",
    texto: "quarto post"
};
const quintoPost = {
    autor: "Manoel",
    texto: "quinto post"
};
const arrayDePosts = [primeiroPost, segundoPost, terceiroPost, quartoPost, quintoPost];
function filtrarAutor(arrayDePosts, autor) {
    const filtroDePosts = arrayDePosts.filter((post) => {
        return post.autor === autor;
    });
    return filtroDePosts;
}
const autorFiltrado = filtrarAutor(arrayDePosts, "Rafaela");
console.log(autorFiltrado);
//# sourceMappingURL=exercicioDaTarde2.js.map