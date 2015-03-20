/** @jsx React.DOM */
var LoginContent = React.createClass({
    getInitialState: function () {
        return {
            "email": '',
            "password": ',',
            'SMTPService': ''
        }
    },
    clickHandler: function (e) {
        var elem = document.getElementById("service");
        this.setState({
            SMTPService: elem.options[elem.selectedIndex].value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }, function () {
            React.render(
                <div>
                    <MailerContent data={this.state}/>
                </div>,
                document.getElementById("content")
            );
        });
    },
    render: function () {
        return (
            <div >
                <div className="row margin-top">
                    <div className="col-sm-6 col-sm-push-4 ">
                        <div className="form-group">
                            <label className="form-control inline-control" htmlFor="email">Email:</label>
                            <input id="email" className="form-control inline-control" type="email"/>
                            <select id="service" className="form-control inline-control btn-info">
                                <option defaultValue="select">select service</option>
                                <option value="Gmail">Gmail</option>
                                <option value="Yahoo">Yahoo</option>
                                <option value="Hotmail">Hotmail</option>
                                <option value="Mandrill">Mandrill</option>
                                <option value="DynectEmail">DynectEmail</option>
                                <option value="hot.ee">hot.ee</option>
                                <option value="iCloud">iCloud</option>
                                <option value="mail.ee">mail.ee</option>
                                <option value="Mail.Ru">Mail.Ru</option>
                                <option value="Mailgun">Mailgun</option>
                                <option value="Mailjet">Mailjet</option>
                                <option value="Postmark">Postmark</option>
                                <option value="QQ">QQ</option>
                                <option value="QQex">QQex</option>
                                <option value="SendGrid">SendGrid</option>
                                <option value="SES">SES</option>
                                <option value="Zoho">Zoho</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-sm-push-4">
                        <div className="form-group">
                            <label className="form-control inline-control" htmlFor="password">Password:</label>
                            <input id="password" className="form-control inline-control" type="password"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2 col-sm-push-7">
                        <div className="form-group">
                            <input className="btn btn-info btn-large" value="Next" onClick={this.clickHandler} type="button"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

React.render(
    <LoginContent />,
    document.getElementById("content")
);
