//  foi criado uma action creator com um creator dentro não se fazendo necessáro
//  uma action e logo abaixo uma action creator como ele também mostrou em sala 
export const criarTarefa = (tarefa) => ({
    type: "CRIAR_TAREFA",
    payload: {
        tarefa,
    }
});

export const marcarTarefaComoCompleta = (tarefaId) => ({
    type: "MARCAR_TAREFA_COMO_COMPLETA",
    payload: {
        tarefaId,
    }
});

export const apagarTarefa = (tarefaId) => ({
    type: "APAGAR_TAREFA",
    payload: {
        tarefaId,
    }
});
