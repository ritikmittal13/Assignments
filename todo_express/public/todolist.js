$(function(){
    let newtodo=$('#newtodo')
    let addtodo=$('#addtodo')
    let todolist=$('#todolist')

    addtodo.click(function(){
        let newTodo=newtodo.val()
        $.post(
            '/todo/',
            {task: newTodo},
            function(data){
                todolist.empty()
                for(todo of data){
                    todolist.append("<li>"+todo.task+"</li>")
                }
            }
        )
    })
})