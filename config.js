module.exports={
    "expressPort":3000,
    "sender":{
        "email":"",
        "password":"",
        "service":""
    },
    "logger": {
        "fullFormat": "[%level][%name-%pid][%file:%line][%time] - %message",
        "minimalFormat": "[%name-%pid][%file:%line] - %message",
        "level": "trace",
        "appNameToDisplayInLog": "NPB",
        "showHidden": false,
        "stdout": {
            "enabled": true
        }
    }
};