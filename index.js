const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const  slugify=require('slugify');
const replaceTemplateCard = require('./Modules/replaceTemplateCard');
app.use(cors());
// read html file
const overview=fs.readFileSync('./Templates/overview.html','utf-8');
const product= fs.readFileSync('./Templates/product.html','utf-8');
const card = fs.readFileSync('./Templates/card.html', 'utf-8');

const alldata=fs.readFileSync('./dev-data/data.json','utf-8');
const dataObj=JSON.parse(alldata);
console.log(slugify("Hamza aslam",{lower:true}));
app.get('/', (req, res) => {
  const CardHtml = dataObj.map(item => replaceTemplateCard(card, item)).join('');
  const output = overview.replace(/{%PRODUCT_CARDS%}/g, CardHtml);
  res.send(output);
});
app.get('/product/:id', (req, res) =>
{
    const item = dataObj[req.params.id];
    const output = replaceTemplateCard(product, item);
    res.send(output);
 });
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));
// blocking 
// const textin = fs.readFileSync('./Text/input.txt','utf-8');
// console.log(textin);
// const write = `my name is ${textin} ${Date()}`;
// fs.writeFileSync('./Text/h.txt',write);
// console.log('file write');


// // non bloking

// fs.readFile('./Text/h.txt','utf-8',(err,data)=>{
//     fs.readFile(`./Text/input.txt`,"utf-8",(err,data2)=>{
//      console.log(data2);
//     });
// // console.log(data);
// });
// console.log("data read");
// app.get('/',(req,res)=>{
//     res.send("hamza aslam");
// })
// app.listen(3000);