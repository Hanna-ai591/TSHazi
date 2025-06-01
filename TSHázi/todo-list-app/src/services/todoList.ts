import{TodoItem} from '../models/todoItem';
import {logAddition} from '../decorators/logAddition';

export class TodoList <T>{
    private items: Map<number, TodoItem<T>>;
    constructor(){
        this.items = new Map();
    }

    addItems(item:TodoItem<T>):void{
        this.items.set(item.id, item);
    }
    deleteItem(id:number):void{
        this.items.delete(id);

    }
    listItems(): TodoItem<T>[] {
        return Array.from(this.items.values());
    }
}