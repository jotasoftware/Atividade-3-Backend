const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('form.html', { root: 'public' });
});

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if((username + username) === password){
        res.send(`<h1>Acesso permitido</h1>`);
    }else{
        res.send(`<h1>Acesso negado</h1>`);
    }
    console.log('Usuário:', username);
    console.log('Senha:', password);
});

module.exports = router;
