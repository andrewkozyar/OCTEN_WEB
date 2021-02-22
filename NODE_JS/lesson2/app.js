const express = require('express')
const expressHbs = require('express-handlebars')
const path = require('path')
const fs = require('fs')
const usersPath = path.join(__dirname, 'users', 'users.json')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'views')))

app.set('view engine', '.hbs')
app.engine('.hbs', expressHbs({defaultLayout: false}))
app.set('views', path.join(__dirname, 'views'))


app.get('/users', (req, res) => {
    fs.readFile(usersPath, ((err, data) => {
        if(err){
            console.log(err)
            return
        }
        let users = JSON.parse(data.toString())
        res.render('users', {users})
    }))
})

app.get('/regist', (req, res) => {
    res.render('regist')
})
app.post('/regist', (req, res) => {
    fs.readFile(usersPath, ((err, data) => {
        if(err){
            console.log(err)
            return
        }
        let {email} = req.body
        let users = JSON.parse(data.toString())
        for(let value of users){
            if(email === value.email){
                res.redirect('/err')
                return
            }
        }
        users.push(req.body)
        fs.writeFile(usersPath, JSON.stringify(users), err1 => console.log(err1))
        res.redirect('/login')
    }))
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', (req, res) => {
    fs.readFile(usersPath, ((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        let {email, password} = req.body
        let users = JSON.parse(data.toString())
        for(let i = 0; i<users.length; i++){
            if(email === users[i].email && password===users[i].password){
                res.redirect('/users/' + i)
                return
            }
        res.redirect('/err')
        }
    }))
})
app.get('users/:userID', (req, res) => {
    fs.readFile(usersPath, ((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const {userID} = req.params
        let users = data.toString()
        res.json(users[userID])
    }))
})

app.get('/err', (req, res) => {
    res.render('err')
})

app.get('/', (req, res) => {
    res.redirect('/err')
})




app.listen(5000, () => {
    console.log('App listen 5000')
})
