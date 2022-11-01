const { Router } = require("express");
const  mercadopago  = require("../mercadoPago");

const router = Router();

router.post("/pago", async (req,res)=>{
   
    let preference = {
        items: [
          {
            title: "SHEN YING «SALUTARIS» AYUDA A LA POTENCIA MASCULINA (8 Cápsulas)",
            unit_price: 5115,
            quantity: 1,
          },
        ],
        "notification_url": "https://9cee-2803-c080-d-f15c-8c4e-9ef5-f0e3-4ba0.sa.ngrok.io/tresmiluno/compra/notificacion",
      }
      
      mercadopago.preferences
        .create(preference)
        .then(function (response) {
      console.log(response.body)// En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      // res.redirect(response.body.init_point)
        
        res.json(response.body.init_point) //  direccion de ORDEN A PAGAR...
        })
        .catch(function (error) {
          console.log(error);
        });
})

router.post('/notificacion', async (req,res)=>{
  const {query}= req
  console.log('NOTIFICACION...')
  console.log({query})
  const topic = query.topic
  // console.log('ESTE DEBAJO ES EL TOPICC')
  // console.log({topic})

  var merchantOrder;
  switch (topic) {
    case "merchant_order":
      const orderId= query.id;
      console.log('OBTENIENDO EL MERCHAN ORDER..', orderId)
      merchantOrder= await mercadopago.merchant_orders.findById(orderId)  
      console.log('ACA VIENE LA DATA DEL MERCHANT ORDER.')
      // console.log(merchantOrder.body)
      res.json(merchantOrder.body)
      break; 
  }
})

module.exports= router