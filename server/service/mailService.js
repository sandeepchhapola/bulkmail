var EventName = require('../src/enum/EventName');
var NodeMailer = require('nodemailer');
var async = require("async");
var sendBulkMail = require("../src/bulkmailer/mailsender");

module.exports.sendMail = function (mailData) {
    var emitter = this;
    if (!mailData) {
        emitter.emit(EventName.ERROR, "Mail data not found.");
    }
    mailData = JSON.parse(mailData);
    log.info("mailData:", mailData);


    var mailOptions = {};
    var task = [];

    var smtpService = {
        service: mailData.userData.SMTPService,
        auth: {
            user: mailData.userData.email,
            pass: mailData.userData.password
        }
    };

    var bulkmailer = new sendBulkMail(smtpService);

    mailData.recieverEmails.split(',').forEach(function (_emailId) {
        mailOptions = {
            from: mailData.userData.email, // sender address
            to: _emailId, // receiver address
            subject: 'Hello', // Subject line
            html: mailData.mailContent // html body
        };

        task.push(function (callback) {
            bulkmailer.sendMails(mailOptions,callback);
        });
    });

    async.parallel(task, function (err, data) {
        if (err) {
            log.error("Error:", err);
            emitter.emit(EventName.ERROR, err);
        }
        else {
            log.info("Send Successfully to:",data);
            emitter.emit(EventName.DONE, "OK");
        }
    });
}.toEmitter();