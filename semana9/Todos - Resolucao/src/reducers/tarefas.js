// definir o estado inicial 
const initalState = {
    todasAsTarefas: [],
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

        case "MARCAR_TAREFA_COMO_COMPLETA": {
            const tarefasAtualizadas = state.todasAsTarefas.map((tarefa) => {
            if(tarefa.id === action.payload.tarefaId) { 
                return { ...tarefa,
                    completa: !tarefa.completa 
                };
            }
            return tarefa;
        });

        return {...state, todasAsTarefas: tarefasAtualizadas };
    }
        case "APAGAR_TAREFA": {
            const tarefasAtualizadas = state.todasAsTarefas.filter((tarefa) => {
                return tarefa.id !== action.payload.tarefaId;
            });

            return {...state, todasAsTarefas: tarefasAtualizadas };
        }

        default: 
            return state;
    }
}

export default tarefas;