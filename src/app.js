const express = require('express')
const app = express()
const port = 3000


//cria rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso de node')
})

//escutar a porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})