/** @jsx React.DOM */
var ImageTool = React.createClass({
    render: function () {
        return (
            <div className="btn-group">
                <a className="btn" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)">
                    <i className="icon-picture"></i>
                </a>
                <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage"
                    style={{
                        opacity: 0, position: 'absolute', top: '0px', left: '0px', width: '40px', height: '30px'
                    }}/>
            </div>
        );
    }
});
