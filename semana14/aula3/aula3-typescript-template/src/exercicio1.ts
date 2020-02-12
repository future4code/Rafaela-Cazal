const fs = require('fs')

let arquivosDeTexto: number[] = [];

const leituraDeArquivos = new Promise((resolve, reject) => {
        fs.readdir('./src/textos', function (error: Error, files: Buffer){
            files.forEach((file: number) => {
                arquivosDeTexto.push(file)
            });
            
            arquivosDeTexto.forEach((file: number) => {
                fs.readFile(`./src/textos/${file}`, (error: Error, data: Buffer ) => {
                    const conteudoDoArquivo: string = data.toString();
                    console.log(conteudoDoArquivo)
                    resolve(conteudoDoArquivo)
                });
                
            });
        })
});

// Função boba criada só
const init = async () => { 
    try{
        const conteudoDosArquivos = await leituraDeArquivos;
        console.log(conteudoDosArquivos)
    } catch(error){
        console.error("Promisse Falhou", error)
    }
}

init();
