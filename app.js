const express=require('express');
const app=express();
const port=process.env.PORT||3000;
const ejs=require('ejs');
app.get('/',(req,res)=>{
    res.send("MMMOOOIIINNN")
})


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});