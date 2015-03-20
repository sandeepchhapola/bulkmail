var MailService=require('../service/mailService');
var EventName=require('../src/enum/EventName');

module.exports.sendMail=function(req,res){
    MailService.sendMail(req.body._data)
        .on(EventName.ERROR, function(err) {
            log.error(err);
            res.send({error:err}).end();
        })
        .on(EventName.DONE, function(result) {
            res.send({result:"DONE"}).end();
        })
};