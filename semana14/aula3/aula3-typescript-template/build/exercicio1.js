var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs');
let arquivosDeTexto = [];
const leituraDeArquivos = new Promise((resolve, reject) => {
    fs.readdir('./src/textos', function (error, files) {
        files.forEach((file) => {
            arquivosDeTexto.push(file);
        });
        arquivosDeTexto.forEach((file) => {
            fs.readFile(`./src/textos/${file}`, (error, data) => {
                const conteudoDoArquivo = data.toString();
                console.log(conteudoDoArquivo);
                resolve(conteudoDoArquivo);
            });
        });
    });
});
const init = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const conteudoDosArquivos = yield leituraDeArquivos;
        console.log(conteudoDosArquivos);
    }
    catch (error) {
        console.error("Promisse Falhou", error);
    }
});
init();
//# sourceMappingURL=exercicio1.js.map