import nodemailer from 'nodemailer'

const sendEmail=(receiver,message)=>{

    let emailtransporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"icyezavanessa@gmail.com",
            pass:"omllfvikjefximmv"
        }
    })
    let details ={
        from:"icyezavanessa@gmail.com",
        to:receiver,
        subject:"reminder for contibution",
        text:message
    }
    emailtransporter.sendMail(details, (err) =>{
        if(err){
            console.log("it ha an error",err)
        }else{
            console.log("Email sent successfully")
        }
    })
}