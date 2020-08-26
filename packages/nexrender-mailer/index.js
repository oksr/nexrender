"use strict";
const nodemailer = require("nodemailer");
const pug = require('pug');
module.exports = (job, settings, action, type) => {
    const template = pug.renderFile('C:/Users/Administrator/Desktop/nexrender/packages/nexrender-mailer/email.pug', { full_name: `${action.full_name}` });
    return new Promise((resolve) => {
         // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'yaso.videos@gmail.com',
            pass: 'OfekS2711!@#'
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"יאסו 💍 | סרטוני הזמנה לאירועים" <yaso.videos@gmail.com>',
        to: `${action.email}`,  //DYNAMIC
        subject: "ההזמנה שלך מוכנה 😍",
        attachments: [
            {
                filename: `${action.file_name}`,//DYNAMIC
                path: `${action.file_path}`  //DYNAMIC
            }
        ],
        html: template
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    resolve(job);
    }
    )
};
