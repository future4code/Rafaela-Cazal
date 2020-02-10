import { setAllTasks, createTask } from './tasks';

describe('Testa action setAllTasks', () => {
    test('Testa type e payload da action', () => {
      const allTasksMock = [
        {
          "id": "jGH9xnVXQMeU3tZOQ2Gy",
          "day": "Quarta",
          "text": "Caminhar 1 hora"
        }
      ]

      const action = setAllTasks(allTasksMock)

      expect(action.type).toEqual('SET_ALL_TASKS')
      expect(action.payload).toEqual({"allTasks": allTasksMock})
    })
  })
  
  describe('Testa action de createTask', () => {
    test('Testa se cria uma tarefa', () => {
       
        const dataMock = [
            {
              "day": "Segunda",
              "text": "Lavar a louça"
            }
          ]
        const action =  createTask(dataMock)
  
      expect([{"day": "Segunda", "text": "Lavar a louça"}]).toEqual(dataMock)
    })
})