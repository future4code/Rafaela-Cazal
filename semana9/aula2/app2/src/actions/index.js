
export const addTaskAction = (newTask) => {
    return {
        type: "ADD_TASK",
        payload: {
            text
        }
    }
}


export const deleteTaskAction = (id) => {
    return {
        type: "DELETE_TASK",
        payload: {
            id
        }
    }
}

// COMPLETAS
export const completeTaskAction = (id) => {
    return {
        type: "COMPLETE_TASK",
        payload: {
            id
        }
    }
}

// PENDENTES
export const pendentTaskAction = () => {
    return {
        type: "COMPLETE_ALL_TASK",
    }
}

// TODAS 
export const showAllTaskAction = () => {
    return {
        type: "SHOW_ALL_TASK",
    }
}

// Marcar todas como completas
export const markAllTaskAction = () => {
    return {
        type: "MARK_ALL_TASK",
    }
}