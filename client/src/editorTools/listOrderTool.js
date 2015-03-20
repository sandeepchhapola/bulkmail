/** @jsx React.DOM */
var ListOrderTool = React.createClass({
    render: function () {
        return (
            <div className="btn-group">
                <a className="btn" data-edit="insertunorderedlist" title="" data-original-title="Bullet list"><i
                    className="icon-list-ul"></i></a>
                <a className="btn" data-edit="insertorderedlist" title="" data-original-title="Number list"><i
                    className="icon-list-ol"></i></a>
                <a className="btn" data-edit="outdent" title="" data-original-title="Reduce indent (Shift+Tab)"><i
                    className="icon-indent-left"></i></a>
                <a className="btn" data-edit="indent" title="" data-original-title="Indent (Tab)"><i
                    className="icon-indent-right"></i></a>
            </div>
        );
    }
});
