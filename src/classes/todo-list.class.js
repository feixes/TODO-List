import { Todo } from ".";


export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        // devolver un array sin el id que pasamos
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        // devolver todos los que no estan completados
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
        // if (localStorage.getItem('todo')) {
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        // } else {
        //     this.todos = [];
        // }

        this.todos = this.todos.map(Todo.fromJson)
    }

    contarPendientes() {
        return this.todos.filter(todo => !todo.completado).length
    }

}