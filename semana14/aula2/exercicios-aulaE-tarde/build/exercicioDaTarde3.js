var IDADE;
(function (IDADE) {
    IDADE["PRE"] = "Pr\u00E9-hist\u00F3ria";
    IDADE["ANTIGA"] = "Idade Antiga";
    IDADE["MEDIA"] = "Idade M\u00E9dia";
    IDADE["MODERNA"] = "Idade Moderna";
    IDADE["CONTEMPORANEA"] = "Idade Contempor\u00E2nea";
})(IDADE || (IDADE = {}));
const defineTempoHistorico = (ano, sigla) => {
    let idade = "";
    if (sigla === "AC") {
        switch (ano) {
            case 100000:
                return idade = IDADE.PRE;
                break;
            case 4000:
                return idade = IDADE.ANTIGA;
                break;
            default: console.log("Você passou um ano errado");
        }
    }
    else if (sigla === "DC" || sigla === undefined) {
        switch (ano) {
            case 476:
                return idade = IDADE.MEDIA;
                break;
            case 1453:
                return idade = IDADE.MODERNA;
                break;
            case 1789:
                return idade = IDADE.CONTEMPORANEA;
                break;
            default: console.log("Você passou um ano errado");
        }
    }
    return idade;
};
const resultado = defineTempoHistorico(4000, "AC");
console.log(resultado);
//# sourceMappingURL=exercicioDaTarde3.js.map