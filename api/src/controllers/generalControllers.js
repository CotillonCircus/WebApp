const {Product,Catalog} = require("../db") 
const nodemailer = require("nodemailer");
const {inventario,catalogos} = require("./inventario")
const path = require("path")
const FS = require("fs")
const {NODEMAILER_MAIL_USER,NODEMAILER_MAIL_PASS} = process.env


const populate = async () => {

    await Catalog.bulkCreate(catalogos)

    const url="http://localhost:3001/images/"

    let images = FS.readdirSync(path.join(__dirname, '../routes/images'))
    let productos = inventario.map((i)=>{
        let img = `${url}imagen_no_disponible.jpg`
        if(images.includes(`${i.name}_${i.color}.jpg`)){
            img = `${url+i.name}_${i.color}.jpg`
        }
        return{
            ...i,
            img:img
        }
    })
    
    await Product.bulkCreate(productos)
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

