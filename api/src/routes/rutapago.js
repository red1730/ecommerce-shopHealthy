const { Router } = require("express");
const  mercadopago  = require("../mercadoPago");




const router = Router();

router.post("/pago", async (req,res)=>{
   
    let preference = {
        items: [
          {
            title: "SHEN YING «SALUTARIS» AYUDA A LA POTENCIA MASCULINA (8 Cápsulas)",
            unit_price: 2115,
            quantity: 1,
          },
        ],
      };
      
      mercadopago.preferences
        .create(preference)
        .then(function (response) {
       console.log(response.body)// En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
        //  res.redirect(response.body.init_point)
        
        res.send(response.body.init_point)
        })
        .catch(function (error) {
          console.log(error);
        });
})

module.exports= router