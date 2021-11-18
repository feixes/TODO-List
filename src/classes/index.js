// fichero para realizar las importaciones. Importamos todo aquí y luego en el index.js 
// principal solo se importa lo que necesitemos desde este archivo.

import { Todo } from './todo.class.js';
import { TodoList } from './todo-list.class.js';

// Después indicamos lo que se exportará
export {
    Todo,
    TodoList,
}