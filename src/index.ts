import express from 'express';

const port = 3000;
const app= express();

app.use(express.static('Public'));

app.listen(port,()=>{
    console.log(`El servidor esta actiu en el port:${port}`);
})