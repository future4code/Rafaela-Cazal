export class transactions {
    value: number
    cpf: string
    description: string

    constructor (cpf: string, value: number, description: string) {
        this.value = value
        this.cpf = cpf
        this.description = description
    }
} 