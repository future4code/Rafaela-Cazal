// definir o estado inicial 
const initalState = {
    todasAsTarefas: [
    {
        id: 0,
        texto: "Comprar laranjas",
        completa: false
    }
    ],
}

const tarefas = ( state = initalState, action ) => {
    switch(action.type) {
        case "CRIAR_TAREFA":
            // const que gaurda o valor do payload da nova tarefa
            const novaTarefa = action.payload.tarefa;
            // cosnt que guarda uma copia de todas as tarefas que existem + a nova tarefa 
            const todasAsTarefasAtualizadas = [...state.todasAsTarefas, novaTarefa];

            // retorna o estado novo 
            return { ...state, todasAsTarefas: todasAsTarefasAtualizadas }
        default: 
            return state;
    }
}

export default tarefas;