const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

module.exports = {
    confirmRegister : async (data) => {
        const {name, email, token} = data;

        try {

            const infoMail = await transport.sendMail({
                from : "Proyect Manager <proyectmanager2023.com>",
                to : email,
                subjet : "confirme su cuenta",
                text : "Confirma tu cuenta en Proyect Manager",
                html : `
                <p>Hola! ${name}, has click en el siguiente enlace</p>
                <a href="${process.env.URL_FRONTEND}/confirm/${token}">Confirma tu cuenta</a>
                `

            })
            console.log(infoMail)
        } catch (error) {
            console.log(error)
        }

    }
}