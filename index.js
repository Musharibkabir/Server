
const express = require('express')
const app = express()
const port = 3008
const path = require('path')



app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.post('/comment', (req, res) => {
    console.log(req.body)  
    res.json(req.body)
})


app.get('/', (req, res) => {
     res.sendFile('Post request Recievedl')
})    

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './public',  'index.html'))

})

app.get('/Musharibkabir', (req, res) => {
    res.sendFile(path.join(__dirname, './public',  'Musharibkabir.html'))
})
