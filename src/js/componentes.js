import { Todo } from "../classes";

import { todoList } from "../index";

// Referencias Html
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo")
const btnBorrar = document.querySelector(".clear-completed")
const ulFiltros = document.querySelector('.filters')
const anchorFiltros = document.querySelectorAll('.filtro')
const spanPendientes = document.querySelector('.todo-count')


export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;


    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild); // Inserta el primer elemento (que est todo el li y lo de dentro) en lugar del div entero

    return div.firstElementChild;

}

export const actualizarPendientes = () => {
    spanPendientes.firstElementChild.innerText = todoList.contarPendientes()
}


// Eventos

txtInput.addEventListener('keyup', (event) => {
    // comprobar si se ha pulsado el enter para crear un nuevo todo

    if (event.key === 'Enter' && txtInput.value.length > 0) {

        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);
        txtInput.value = ""
        actualizarPendientes()
    }
})

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute("data-id")

    if (nombreElemento.includes('input')) { // click en el elemento
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    actualizarPendientes()

})

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento)
        }

    }
    actualizarPendientes()
})

ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text

    if (!filtro) { return; }

    anchorFiltros.forEach(elemento => elemento.classList.remove('selected'))
    event.target.classList.add('selected')

    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                    break;
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                    break;
                }
                break;
        }
    }

})

