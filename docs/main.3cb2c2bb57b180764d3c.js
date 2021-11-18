(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{L:()=>b});var t,n,r,o=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date};function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}r=function(e){var t=e.id,n=e.tarea,r=e.completado,a=e.creado,i=new o(n);return i.id=t,i.completado=r,i.creado=a,i},(n="fromJson")in(t=o)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r;var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,n,r;return t=e,(n=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,n=a(this.todos);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id==e){r.completado=!r.completado,this.guardarLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(o.fromJson)}},{key:"contarPendientes",value:function(){return this.todos.filter((function(e){return!e.completado})).length}}])&&c(t.prototype,n),r&&c(t,r),e}();function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=document.querySelector(".todo-list"),f=document.querySelector(".new-todo"),m=document.querySelector(".clear-completed"),v=document.querySelector(".filters"),h=document.querySelectorAll(".filtro"),y=document.querySelector(".todo-count"),p=function(e){var t='\n    <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n            <label>").concat(e.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=t,d.append(n.firstElementChild),n.firstElementChild},g=function(){y.firstElementChild.innerText=b.contarPendientes()};f.addEventListener("keyup",(function(e){if("Enter"===e.key&&f.value.length>0){var t=new o(f.value);b.nuevoTodo(t),p(t),f.value="",g()}})),d.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,r=n.getAttribute("data-id");t.includes("input")?(b.marcarCompletado(r),n.classList.toggle("completed")):t.includes("button")&&(b.eliminarTodo(r),d.removeChild(n)),g()})),m.addEventListener("click",(function(){b.eliminarCompletados();for(var e=d.children.length-1;e>=0;e--){var t=d.children[e];t.classList.contains("completed")&&d.removeChild(t)}g()})),v.addEventListener("click",(function(e){var t=e.target.text;if(t){h.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,r=u(d.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pendientes":if(a){o.classList.add("hidden");break}break;case"Completados":if(!a){o.classList.add("hidden");break}}}}catch(e){r.e(e)}finally{r.f()}}}));var b=new l;b.todos.forEach(p),g()})();