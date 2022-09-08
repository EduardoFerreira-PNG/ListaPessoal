// SELEÇÃO DE ELEMENTOS
    const todoForm = document.querySelector("#lista__form");
    const todoInput = document.querySelector("#lista__input");
    const todoList = document.querySelector("#todo-list");
    const editForm = document.querySelector("#edit__form");
    const editInput = document.querySelector("#edit__input");
    const cancelEditBtn = document.querySelector("#cancel__edit--btn");

    let oldInputValue;

// FUNÇOES 
    const saveTodo = (text) => {
        const todo = document.createElement("div")
        todo.classList.add("todo")

        const todoTittle = document.createElement("h3")
        todoTittle.innerText = text
        todo.appendChild(todoTittle)
        console.log(todo)

        const doneBtn = document.createElement("button")
        doneBtn.classList.add("finish-todo")
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todo.appendChild(doneBtn);

        const editBtn = document.createElement("button")
        editBtn.classList.add("edit-todo")
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
        todo.appendChild(editBtn);

        const removeBtn = document.createElement("button")
        removeBtn.classList.add("remove-todo")
        removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        todo.appendChild(removeBtn);

        todoList.appendChild(todo)

        todoInput.value = ""
        todoInput.focus()
    };

    const toggleForms = () =>{
        editForm.classList.toggle("hide")
        todoForm.classList.toggle("hide")
        todoList.classList.toggle("hide")
    }

    const updateTodo = (text) => {

        const todos = document.querySelectorAll(".todo")

        todos.forEach((todo) =>{
            let todoTittle = todo.querySelector("h3")

            if(todoTittle.innerText === oldInputValue){
                todoTittle.innerText = text
            }
        })

    }

//EVENTOS
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue)
    }
});

document.addEventListener("click", (e) => {
    const targetEL = e.target;
    const parentEl = targetEL.closest("div");
    let todoTittle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTittle = parentEl.querySelector("h3").innerText;
    }

    if(targetEL.classList.contains("finish-todo")){
        parentEl.classList.toggle("done")
    }

    if(targetEL.classList.contains("remove-todo")){
        parentEl.remove()
    }
    if(targetEL.classList.contains("edit-todo")){
        toggleForms()

        editInput.value = todoTittle
        oldInputValue = todoTittle
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue){
        updateTodo(editInputValue)
    }

    toggleForms()
});