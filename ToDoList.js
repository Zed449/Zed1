    const ToDoList=[];

    function AddToDo()
    {
        let inputText=document.querySelector('.js-name-input')
        ToDoList.push(inputText.value)
        
        inputText.value='';
        displayText();
    }

    function Deletetodo(index){
        ToDoList.splice(index, 1);
        displayText();
    }

    function displayText() 
    {
        let content='';
        for(let i=0; i< ToDoList.length; i++) {
            content+= `<p>${ToDoList[i]}
            <button onclick="Deletetodo(${i})">Delete</button>
            <button onclick="Edittodo(${i})">Edit</button>
            </p>`;
        }
        document.querySelector('.js-text').innerHTML = `${content}`;
    }




