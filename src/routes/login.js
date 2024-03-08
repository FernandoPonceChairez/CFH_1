const express = require('express');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

//Mierda que agregué para que se pudieran ver las vistas que hice
router.get('/hmenu', (req,res) =>{
    res.render('hmenu');
});
router.get('/creditos', (req,res) =>{
    res.render('creditos');
});
router.get('/conocenos',(req,res)=>{
    res.render('conocenos');
});

///Ahorro///
router.get('/ahorro',(req,res)=>{
    res.render('ahorro');
});

router.get('/ahorrojr',(req,res)=>{
    res.render('ahorrojr');
});

router.get('/ahorroh',(req,res)=>{
    res.render('ahorroh');
});

router.get('/depositoh',(req,res)=>{
    res.render('depositoh');
});

router.get('/navih',(req,res)=>{
    res.render('navih');
});

router.get('/debih',(req,res)=>{
    res.render('debih');
});

router.get('/plazo',(req,res)=>{
    res.render('plazofijo');
});
//////
router.get('/servicios',(req,res)=>{
    res.render('servicios');
});

router.get('/asociate',(req,res)=>{
    res.render('asociate');
});


/////////Créditos////////////////////////
router.get('/hipoteca',(req,res)=>{
    res.render('hipoteca');
});

router.get('/pyme',(req,res)=>{
    res.render('pyme');
});

router.get('/comercialpyme',(req,res)=>{
    res.render('comercialpyme');
});

router.get('/terrenohip',(req,res)=>{
    res.render('terrenohip');
});

router.get('/remodelahip',(req,res)=>{
    res.render('remodelahip');
});

router.get('/construyehip',(req,res)=>{
    res.render('construyehip');
});

router.get('/refaccionhip',(req,res)=>{
    res.render('refaccionhip');
});

router.get('/aviohip',(req,res)=>{
    res.render('aviohip');
});

router.get('/triplehip',(req,res)=>{
    res.render('triplehip');
});

router.get('/maxhip',(req,res)=>{
    res.render('maxhip');
});

router.get('/promohip',(req,res)=>{
    res.render('promohip');
});

router.get('/autohip',(req,res)=>{
    res.render('autohip');
});

router.get('/creditoesp',(req,res)=>{
    res.render('creditoesp');
});

router.get('/credihip',(req,res)=>{
    res.render('credihip');
});

router.get('/automaticohip',(req,res)=>{
    res.render('automaticohip');
});

router.get('/preautohip',(req,res)=>{
    res.render('preautohip');
});

///////////////////////////////////////////////////////////////////

/////////////////Hipodromvil//////////////

router.get('/hipodromovil',(req,res)=>{
    res.render('hipodromovil');
});
///////

///////Beneficios
router.get('/clasificacion',(req,res)=>{
    res.render('beneficiosclasif');
});

router.get('/recompensas',(req,res)=>{
    res.render('recompensas');
});

router.get('/pagoadelantado',(req,res)=>{
    res.render('pagoadelantado');
});

router.get('/apoyofunerario',(req,res)=>{
    res.render('apoyofunerario');
});
router.get('/terceraedad',(req,res)=>{
    res.render('terceraedad');
});

router.get('/progpromesa',(req,res)=>{
    res.render('progpromesa');
});

router.get('/apoyodiscapacitados',(req,res)=>{
    res.render('apoyodisc');
});

router.get('/protecciones',(req,res)=>{
    res.render('protecciones');
});

router.get('/fondoproteccion',(req,res)=>{
    res.render('fondoproteccion');
});

router.get('/luna',(req,res)=>{
    res.render('luna');
});

router.get('/bolsatrabajo',(req,res)=>{
    res.render('bolsatrabajo');
});

router.get('/API',(req,res)=>{
    res.render('API');
});

router.get('/becas',(req,res)=>{
    res.render('becas');
});


router.get('/creditos');
router.get('/login', LoginController.login);
router.post('/login', LoginController.auth);
router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);
router.get('/logout', LoginController.logout);
router.get('/credito', LoginController.credito);
router.post('/loan-estimate', LoginController.loanEstimate);
router.post('/solicitar', LoginController.solicitar);
router.get('/solicitar', LoginController.solicitar);

router.get('/tabla', LoginController.tabla);
router.post('/delete', LoginController.destroy);
router.get('/edit/:id', LoginController.edit);
router.post('/edit/:id', LoginController.update);

router.post('/create', LoginController.store);

module.exports = router;