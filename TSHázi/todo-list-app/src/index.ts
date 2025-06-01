import { TodoItem } from "./models/todoItem";
import { TodoList } from "./services/todoList";
import { TaskContent, isDatedTask } from "./utils/typeGuards";

const  todoList = new TodoList<TaskContent>();
const textTask = new TodoItem(1, "Takarítás");
const datedTask = new TodoItem(2, {
    message: "Vizsga időpont",
    dueDate: new Date("2025-06-10"),
  });  

todoList.addItems(textTask);
todoList.addItems(datedTask);
const allItems = todoList.listItems();

 for (const item of allItems){
    if(isDatedTask(item.content)){
        console.log(`[Dátumos] ${item.content.message} - ${item.content.dueDate}`);

    }
    else{
        console.log(`[Szöveges] ${item.content}`)
    }
 }