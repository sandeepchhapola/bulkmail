/** @jsx React.DOM */
var MailerContent = React.createClass({
    getInitialState: function () {
        return {
            "userData":this.props.data,
            "recieverEmails": '',
            "uploadFileInfo":'Please, Select CVS file containing comma separated emails!'
        }
    },
    fileHandler: function (_event) {
        //Retrieve the first (and only!) File from the FileList object
        var _this=this;
        var csv = _event.target.files[0];
        var textType = /csv.*/;
        if (csv.type.match(textType)) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if(reader.result){
                    _this.setState({recieverEmails:reader.result.split('\n').join(''),uploadFileInfo:csv.name});
                }
            };
            reader.readAsText(csv);
        }
        else {
            alert("Failed to load csv file");
        }
    },
    render: function () {
        return (
            <div>
                <div className="row" style={{'marginTop':'5%', 'marginBottom':'5px'}}>
                    <div className="col-sm-2 col-sm-push-1 ">
                        <span className="btn btn-default btn-file">
                        Browse...<input type="file" id="uploadFile" name="uploadFile" onChange={this.fileHandler}/>
                        </span>
                    </div>
                    <div className="col-sm-5" >
                        <h5>{this.state.uploadFileInfo}</h5>
                    </div>
                </div>
                <div className="row" style={{'marginTop':'5px', 'marginBottom':'5px'}}>
                    <div className="col-sm-2 col-sm-push-1 ">
                        <label className="form-control" htmlFor="subject">Subject:</label>
                    </div>
                    <div className="col-sm-5" >
                        <input id="subject" className="form-control" type="text"/>
                    </div>
                </div>
                <TextEditor data={this.state}/>
            </div>
        );
    }
});
