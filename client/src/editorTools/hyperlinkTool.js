/** @jsx React.DOM */
var HyperlinkTool = React.createClass({
    render: function () {
        return (
            <div className="btn-group">
                <a className="btn dropdown-toggle" data-toggle="dropdown" data-original-title="Hyperlink">
                    <i className="icon-link"></i>
                </a>

                <div className="dropdown-menu input-append">
                    <input className="span2" placeholder="URL" type="text" data-edit="createLink"/>
                    <button className="btn" type="button">Add</button>
                </div>
                <a className="btn" data-edit="unlink" data-original-title="Remove Hyperlink">
                    <i className="icon-cut"></i>
                </a>
            </div>
        );
    }
});
