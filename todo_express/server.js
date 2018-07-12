const express=require('express')
const server=express()

let todo=[
    {task: "Go to Market", done:"Y"},
    {task: "Go to Laundry", done:"N"}
]
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.get('/todo',(req,res)=>res.send(todo))
server.get('/todo/:id',(req,res)=>res.send(todo[req.params.id]))
server.post('/todo',(req,res)=>{
    todo.push({
        task: req.body.task,
        done: req.body.done
    })
    res.send(todo)
})
server.patch('/todo/:id',function(req,res){
    todo[req.params.id].task=req.body.task
    todo[req.params.id].done=req.body.done
    res.send(todo)
})
server.delete('/todo/:id',function(req,res){
    todo.splice(req.params.id,1)
    res.send(todo)
})
server.listen(1980)