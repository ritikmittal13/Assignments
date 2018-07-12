const express=require('express')
const server=express()
const todoRoute=require('./routes/todo')

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use('/todo',todoRoute)
server.use('/public',express.static(__dirname+"/public"))
server.listen(1980)