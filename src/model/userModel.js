// simulação de um banco de dados em memória
let users = [
    {id:1, name: 'ALice', email: 'Alice@gmail.com'},
    {id:2, name: 'Matheus', email: 'matheus@gmail.com'},
    {id:3, name: 'Larissa', email: 'larissa@gmail.com'}
];

//Função para buscar todos os usuários
const findAll = () => {
    return users;
}

//Função para buscar um usuario por ID
const findby = (id) => {
    return users.find(user => user.id === id);

}

//Função que adicionar um novo usuario
const create = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const userWithID = {id: newId, ...newUser }
    user.push(userWithID);
    return userWithID;

}

//Exportar as funções
module.exports = {
    findAll,
    findById,
    create
    
}