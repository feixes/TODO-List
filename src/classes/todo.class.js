

export class Todo {
    // clase para reconstruir la instancia cuando se recibe el objeto desde el localStorage
    static fromJson = ({ id, tarea, completado, creado }) => {
        const tempTodo = new Todo(tarea)
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}