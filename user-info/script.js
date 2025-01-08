// import axios from 'axios';


// const form = document.getElementById('userForm');
// const resultDiv = document.getElementById('result');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;

//   try {
//     const response = await axios.post('/api/users', { name, email }); 
//     resultDiv.innerHTML = `<p>Success! User data sent to the server.</p>`; 
//   } catch (error) {
//     resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
//   }
// });

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/api/users', (req, res) => {
//   const { name, email } = req.body;

//   // Store data in database or log for demonstration
//   console.log(`Received user data: Name: ${name}, Email: ${email}`);

//   res.json({ message: 'User data received successfully' });
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });