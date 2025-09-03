// Importar módulo express
const express =  require ('express');
const userRoutes = require('./src/routes/userRoutes');

// Criar uma aplicação express
const app = express();

app.use(express.json());

// Definir a porta em que o servidor irá escutar
const porta = 8000;

//Definir a rota de teste de API
app.get('/', (req, res) => {
    res.send("API de usúarios está funcionando");

})


app.use('/api/users', userRoutes)

//Inicia o servidor 
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    
})