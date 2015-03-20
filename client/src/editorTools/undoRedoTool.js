/** @jsx React.DOM */
var UndoRedoTool = React.createClass({
    render: function () {
        return (
            <div className="btn-group">
                <a className="btn" data-edit="undo" title="" data-original-title="Undo (Ctrl/Cmd+Z)"><i
                    className="icon-undo"></i></a>
                <a className="btn" data-edit="redo" title="" data-original-title="Redo (Ctrl/Cmd+Y)"><i
                    className="icon-repeat"></i></a>
            </div>
        );
    }
});
/**
 * Created by sandeepchhapola on 13/3/15.
 */
