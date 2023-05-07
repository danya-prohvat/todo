export class Axios {
    baseUrl
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl; 
    }

    async getTodos(todoType: string) {
        const response = await fetch(`${this.baseUrl}getTodos?filterBy=${todoType}`)
        return response.json()
    }

    async deleteTodo(id: number) {
        await fetch(`${this.baseUrl}deleteTodo?id=${id}`)
    }

    async changeTodoStatus(id: number) {
        await fetch(`${this.baseUrl}updateTodo?id=${id}`)
    }

    async clearCompleted() {
        await fetch(`${this.baseUrl}clearCompleted`)
    }

    async createTodo(title: string) {
        await fetch(`${this.baseUrl}createTodo`, {
            method:'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title})
        })
    }
}