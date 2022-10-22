const { Router } = require("express");
const{Usuario}= require('../db');
const router = Router();
const nodemailer= require('nodemailer');



router.get("/usuarios", async (req, res) => {
    try {
      const usuario = await Usuario.findAll();
      res.status(200).send(usuario);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });
router.post("/", async (req, res) => {
    try {
      const {
        id,
        nombre,
        apellido,
        dni,
        direccion,
        contraseña,
        telefono,
        mail,
        isAdmin,
      } = req.body;
      
      const usuario = await Usuario.create({
        id: id,
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        direccion: direccion,
        contraseña: contraseña,
        telefono: telefono,
        mail: mail,
        isAdmin: isAdmin,
      });
      contentHTML=`
      <h1>Bienvenido ${nombre} y gracias por ser parte de una vida más saludable</h1>
      <p>${mail}</P>
      `;

      var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "216ce7a084457c",
          pass: "61173582d5ce81"
        }
      });

      const info = await transport.sendMail({
        from: '"Healthy Shop 🥗🍚" <healthyshophenry@outlook.com>', 
        to: `${usuario.mail}`, 
        subject: "Hello ✔", // Subject line
        
        html: `<b> <h1>Bienvenido ${nombre} y gracias por ser parte de una vida más saludable</h1>
        <p>${mail}</P></b>`, // html body
      })
      
      console.log("Message sent: %s", info.messageId)

   

      res.status(200).send(usuario);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  
  });
  

router.put("/admin/usuario/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const usuario = await Usuario.findByPk(id);
      const {
        uid,
        nombre,
        apellido,
        dni,
        direccion,
        contraseña,
        telefono,
        mail,
        isAdmin,
      } = req.body;
      if (uid) {
        usuario.id = uid;
        usuario.save();
      }
      if (nombre) {
        usuario.nombre = nombre;
        usuario.save();
      }
      if (apellido) {
        usuario.apellido = apellido;
        usuario.save();
      }
      if (dni) {
        usuario.dni = dni;
        usuario.save();
      }
      if (direccion) {
        usuario.direccion = direccion;
        usuario.save();
      }
      if (contraseña) {
        usuario.contraseña = contraseña;
        usuario.save();
      }
      if (telefono) {
        usuario.telefono = telefono;
        usuario.save();
      }
      if (mail) {
        usuario.mail = mail;
        usuario.save();
      }
      if (isAdmin) {
        usuario.isAdmin = isAdmin;
        usuario.save();
      }
      res.status(200).send(id);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
router.delete("/usuario/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const usuarioaborrar = await Usuario.findByPk(id);
      await usuarioaborrar.destroy();
      res.status(200).send(id);
    } catch (error) {
      next(error);
    }
  });
  module.exports = router;