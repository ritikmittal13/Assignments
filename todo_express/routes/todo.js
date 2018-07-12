const route=require('express').Router()

let todo=[]
route.get('/',(req,res)=>res.send(todo))
route.get('/:id',(req,res)=>res.send(todo[req.params.id]))
route.post('/',(req,res)=>{
    todo.push({
        task: req.body.task,
        done: req.body.done
    })
    res.send(todo)
})
route.patch('/:id',function(req,res){
    todo[req.params.id].task=req.body.task
    todo[req.params.id].done=req.body.done
    res.send(todo)
})
route.delete('/:id',function(req,res){
    todo.splice(req.params.id,1)
    res.send(todo)
})

module.exports=route