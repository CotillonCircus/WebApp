const {Product,Catalog} = require("../db") 
const nodemailer = require("nodemailer");
const {inventario,catalogos} = require("./inventario")
const {NODEMAILER_MAIL_USER,NODEMAILER_MAIL_PASS} = process.env


const populate = async () => {

    await Catalog.bulkCreate(catalogos)
    await Product.bulkCreate(inventario)
    console.log("db populated")
}


async function sendMail(to,subject,text,html) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NODEMAILER_MAIL_USER,
      pass: NODEMAILER_MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: 'Remitente', 
    to,
    subject,
    text,
    html
  });
}

module.exports={
    populate,
    sendMail
}

