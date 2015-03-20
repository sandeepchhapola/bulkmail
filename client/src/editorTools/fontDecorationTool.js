/** @jsx React.DOM */
var FontDecorationTool = React.createClass({
    render: function () {
        return (
            <div className="btn-group">
                <a className="btn" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i
                    className="icon-bold"></i></a>
                <a className="btn" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i
                    className="icon-italic"></i></a>
                <a className="btn" data-edit="strikethrough" title="" data-original-title="Strikethrough"><i
                    className="icon-strikethrough"></i></a>
                <a className="btn" data-edit="underline" title=""
                    data-original-title="Underline (Ctrl/Cmd+U)"><i
                    className="icon-underline"></i></a>
            </div>
        );
    }
});
