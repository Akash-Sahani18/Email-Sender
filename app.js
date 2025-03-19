    //Email Sender 
    const mailer = require('nodemailer')

    let transport=mailer.createTransport({
        service:'gamil',
        auth:{
            user:'sahaniaakash563@gmail.com',
            pass:'password123@'
        }
    })

    let messageOb={
        from:'sahaniaakash563@gmail.com',
        to:'2203051050834@paruluniversity.ac.in',
        subject:'Email Using NODE JS',
        text:'This mail is sent using Node js'
    }
    transport.sendMail(messageOb,(err,info)=>{
        if(err){
            console.log("Error Occured!!"+err);
        }else{
            console.log("Email Sent Successfully")
            console.log(info.res)
        }
    })
