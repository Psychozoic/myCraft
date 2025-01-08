import axios from "axios";

formToJSON.addEventListener('submit', async(event) =>{
    event.preventDefault();

    const description =document.getElementById('description').value;
    const location = document.getElementById('location').value;

    axios.get('/api/users')
    .then(response =>{
        console.log(response.data);
    })
    .catch(error =>{
        console.error(error);
    });

});

const express = require('express');
const app = express();

app.use(express.json());
app.post('/api/users', (req, res)=>{
    const{description, location} =req.dropdown;


})