const {Router} =require ('express');
const router= Router();

//const express= require(express);
//const router= express.Router();

const heroes =require('./data.json');
console.log(heroes);

router.get('/', (req, res)=>{
    res.json(heroes);
});

router.get('/:Superheroe', (req,res)=>{
    const {Superheroe}=req.params;
    
    heroes.forEach(heroe =>{
        if(heroe.Superheroe ==Superheroe){
            res.json(heroe);
           
        }
    })
    
    console.log(Superheroe);
   
});

router.post('/', (req, res)=>{
    const {Nombre, Años, Identidad, Superpoderes} =req.body;
    if(Nombre && Años && Identidad && Superpoderes){
       
       const Superheroe= heroes.length +1;
       const nuevoheroes ={...req.body, Superheroe};
       heroes.push(nuevoheroes);
       
       //console.log(nuevoHeroes);
       
        res.status(200).json(heroes);
    }else{
        res.status(500).json({error: 'no data'});
       
    }
  
});

module.exports= router;