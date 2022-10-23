const { Router } = require('express')
const nodemailer = require('nodemailer')
const router = Router()


router.post('/', async (req,res)=>{
    console.log(req.body)

    const transport = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,   //con ssl o 25 sin ssl
        secure: false,
        auth: {
            user: 'healthyshophenry@outlook.com',
            pass: 'proyectogripal7'
        },
        tls: {
            rejectUnauthorized: false   //permite mandar mails desde otro lado q no sea el localhost
        }
    })

    const info = await transport.sendMail({
        from: 'healthyshophenry@outlook.com',
        to: 'mceciliasosa@gmail.com',
        subject: 'Prueba de almacén saludable con mati',
        text: 'anduvo el envio del correo nodemailer'
    })

    console.log('Message sent', info.messageId)

    res.send('received')
})

module.exports = router;