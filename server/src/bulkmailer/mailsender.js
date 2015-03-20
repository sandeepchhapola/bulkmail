var sendMultiMails=function(smtpService){
    var nodemailer = require("nodemailer");
    var smtpTransport = nodemailer.createTransport(smtpService);

    this.sendMails=function(mailOptions,callback) {
        smtpTransport.sendMail(mailOptions, function (error, info) {
            if (error) {
                log.error(error);
                callback(error, null)
            } else {
                callback(null, mailOptions.to)
                log.info("Message sent: " + info.response);
            }
        });
    }
};

module.exports=sendMultiMails;
