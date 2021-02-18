const fs = require('fs')
const path = require('path')


const dir18Path = path.join(__dirname, '18.00')
const dir20Path = path.join(__dirname, '20.00')


fs.readdir(dir18Path, (err, files) => {
    if(err){
        console.log(err)
        return
    }
    files.forEach(e => sort18(e))
})

fs.readdir(dir20Path, (err, files) => {
    if(err){
        console.log(err)
        return
    }
    files.forEach(e => sort20(e))
})


function sort18(fileName) {
    fs.readFile(path.join(dir18Path, fileName), (err, data) => {
        if(err){
            console.log(err)
            return
        }
        let json = JSON.parse(data.toString())
        if(json.gender == 'male'){
            fs.rename(path.join(dir18Path, fileName), path.join(dir20Path, fileName), err1 => {
                console.log(err1)
            })
        }
    })
}

function sort20(fileName) {
    fs.readFile(path.join(dir20Path, fileName), (err, data) => {
        if(err){
            console.log(err)
            return
        }
        let json = JSON.parse(data.toString())
        if(json.gender == 'female'){
            fs.rename(path.join(dir20Path, fileName), path.join(dir18Path, fileName), err1 => {
                console.log(err1)
            })
        }
    })
}



