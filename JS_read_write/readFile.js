var fs=require('fs')
var final=""
fs.readFile(__dirname +'/input_file.txt',function(err,data){
    if(err) throw err
    var arr=data.toString().split(/\s+/)
    var answer=counter(arr)
    for(var i in answer){
        final+=answer[i].animal + " : "+answer[i].total+ "\n"
    }
    fs.writeFile(__dirname +'/output.txt',final,function(err){
        if(err) throw err
        console.log("File was written")
    })
})
function counter(ab){
     var checkobj={};
    for(var i in ab){
        if(checkobj.hasOwnProperty(ab[i])){
            checkobj[ab[i]]++
        }
        else{
            checkobj[ab[i]]=1
        }
    }
    ans=Object.keys(checkobj).map(function(key){
        return{
            animal: key,
            total: checkobj[key]
        }
    })
    return ans
}
fs.readFile(__dirname +'/output.txt',function(err,data){
    if(err) throw err
    console.log(data.toString())
})