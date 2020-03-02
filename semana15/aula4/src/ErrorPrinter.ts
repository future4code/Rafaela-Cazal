import * as moment from "moment"

export class ErrorPrinter {
    protected date: string = moment().format('DD/MM/YYYY, HH:mm')

    constructor (
     public message: string 
    ) {}

    public onError (message: string): void {
       console.log(`<${this.message}> - <${this.date}>`)
    }
}  

