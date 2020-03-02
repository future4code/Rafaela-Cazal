import * as moment from 'moment'

export class Post {
    protected date: string = moment().format('DD/MM/YYYY, HH:mm')

    constructor(
        protected postAuthor: string,
        protected postText: string
    ) { }

} 

// const post = new Post("Elen", "Hello Word")
// console.log(post)
