


function NovaTarefa(){ 
const tarefa = document.getElementById('input-Tarefa').value
document.getElementById('input-Tarefa').value = ""
const DiaSelecionado = document.getElementById('diaDaSemana').value
let containerDoDia

switch (DiaSelecionado) {
    case "segunda":
        containerDoDia= document.getElementById('container-segunda') 
        break;
        case "terca":
            containerDoDia= document.getElementById('container-terca') 
            break;
            case "quarta":
                containerDoDia= document.getElementById('container-quarta') 
                break;
                case "quinta":
                    containerDoDia= document.getElementById('container-quinta') 
                    break;
                    case "sexta":
                        containerDoDia= document.getElementById('container-sexta') 
                        break;
                        case "sabado":
                            containerDoDia= document.getElementById('container-sabado') 
                            break;
                            case "domingo":
                                containerDoDia= document.getElementById('container-domingo') 
                                break;
                        
                         default:
                         containerDoDia= document.getElementById('container-segunda') 
                         break;
}
containerDoDia.innerHTML += "<ul>" + tarefa + "</ul>"
}

