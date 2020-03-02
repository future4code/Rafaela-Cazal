import { Teacher } from "./Teacher"
import { Student } from "./Student"

export abstract class Mission {
    constructor(
        public inicialDate: string,
        public endDate: string,
        public teachersList: Teacher[],
        public studentsList: Student[]
    ){}
}