export class Axios {
    baseUrl
    constructor(baseUrl:string) {
        this.baseUrl = baseUrl; 
    }

    async getTodos(todoType:string) {
        const response = await fetch(`${this.baseUrl}getTodos?filterBy=${todoType}`)
        return response.json()
    }

    async deleteTodo(id:number) {
        await fetch(`${this.baseUrl}deleteTodo?id=${id}`)
    }

    async changeTodoStatus(id:number) {
        await fetch(`${this.baseUrl}updateTodo?id=${id}`)
    }

    async clearCompleted() {
        await fetch(`${this.baseUrl}clearCompleted`)
    }
}