
import "./styles.css";

import { Todo, TodoList } from './classes'; // Por defecto buscará index.js
import { crearTodoHtml, actualizarPendientes } from "./js/componentes";

export const todoList = new TodoList();


todoList.todos.forEach(crearTodoHtml)
actualizarPendientes()


// const tarea = new Todo('Aprender Javascript');

// todoList.nuevoTodo(tarea);

//console.log(todoList.todos);

//crearTodoHtml(tarea);


