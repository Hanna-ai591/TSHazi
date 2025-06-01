export class TodoItem <T>{
    id: number;
    content: T;
    constructor(id:number, content:T){
        this.id= id;
        this.content =  content;
    }
}