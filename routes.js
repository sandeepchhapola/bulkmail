var MailRoute=require('./server/routes/mailRoute');

module.exports.init=function(app){
    app.get("/",function(req,res){
        res.sendFile("index.html");
    });

    app.post("/sendemail",MailRoute.sendMail);

};