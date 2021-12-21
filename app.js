const express=require('express');
const path=require('path');
const app= express();
const publicPath=path.resolve(__dirname,'./public');
const PORT= process.env.PORT || 3000;
app.use(express.static(publicPath));

app.listen(PORT,()=> console.log(`Servidor corriendo en el puerto ${PORT}`));
app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'views/home.html')));
app.post('/',(req,res)=>res.sendFile(path.resolve(__dirname,'views/home.html')));
app.get('/register',(req,res)=>res.sendFile(path.resolve(__dirname,'views/register.html')));
app.post('/register',(req,res)=>res.sendFile(path.resolve(__dirname,'views/register.html')));
app.get('/login',(req,res)=>res.sendFile(path.resolve(__dirname,'views/login.html')));
app.post('/login',(req,res)=>res.sendFile(path.resolve(__dirname,'views/login.html')));
