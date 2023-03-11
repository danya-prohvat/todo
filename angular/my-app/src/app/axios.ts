export class Axios {
    baseUrl
    constructor(baseUrl:string) {
        this.baseUrl = baseUrl; 
    }

    async getTodos(todoType:string) {
        const response = await fetch(`${this.baseUrl}getTodos?filterBy=${todoType}`)
        return response.json()
    }
}