/** @jsx React.DOM */
var JustiFfyTool = React.createClass({
    render: function () {
        return (
            <div className="btn-group">
                <a className="btn" data-edit="justifyleft" title=""
                    data-original-title="Align Left (Ctrl/Cmd+L)"><i
                    className="icon-align-left"></i></a>
                <a className="btn" data-edit="justifycenter" title="" data-original-title="Center (Ctrl/Cmd+E)"><i
                    className="icon-align-center"></i></a>
                <a className="btn" data-edit="justifyright" title=""
                    data-original-title="Align Right (Ctrl/Cmd+R)"><i
                    className="icon-align-right"></i></a>
                <a className="btn" data-edit="justifyfull" title=""
                    data-original-title="Justify (Ctrl/Cmd+J)"><i
                    className="icon-align-justify"></i></a>
            </div>
        );
    }
});
