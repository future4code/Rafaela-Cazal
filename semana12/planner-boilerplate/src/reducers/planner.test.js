import { setAllTasks } from "../actions/tasks";
import planner from './planner'

describe("Testa reducer planner", () => {
    test('Testa action setAllTasks', () => {
        const currentState = {
            allTasks: [],
        }

        const allTasksMock = [
            {
              "id": "jGH9xnVXQMeU3tZOQ2Gy",
              "day": "Quarta",
              "text": "Caminhar 1 hora"
            }
        ]

        const action = setAllTasks(allTasksMock)

        const newState = planner(currentState, action)

        expect(newState.allTasks).toHaveLength(1)
        expect(newState.allTasks[0].day).toEqual("Quarta")
    })
}) 