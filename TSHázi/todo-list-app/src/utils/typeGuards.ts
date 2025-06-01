export type TextTask = string;
export type DatedTask = {
    message:string;
    dueDate:Date;
};
export type TaskContent = TextTask | DatedTask;
export function isDatedTask(content: TaskContent): content is DatedTask {
    return (
        typeof content === "object" && content  !== null && "message" in content && "dueDate" in content
    );
}