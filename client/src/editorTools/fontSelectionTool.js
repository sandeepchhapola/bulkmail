/** @jsx React.DOM */
var FontSelectionItem = React.createClass({
    render: function () {
        return (
            <div className="btn-group">
                <a className="btn dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Font">
                    <i className="icon-font"></i><b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <li><a data-edit="fontName Serif" style={{'font-family':'Serif'}}>Serif</a></li>
                    <li><a data-edit="fontName Sans" style={{'font-family':'Sans'}}>Sans</a></li>
                    <li><a data-edit="fontName Arial" style={{'font-family':'Arial'}}>Arial</a></li>
                    <li><a data-edit="fontName Courier" style={{'font-family':'Courier'}}>Courier</a></li>
                    <li><a data-edit="fontName Arial Black" style={{'font-family':'Arial Black'}}>Arial Black</a></li>
                    <li><a data-edit="fontName Courier New" style={{'font-family':'Courier New'}}>Courier New</a></li>
                    <li><a data-edit="fontName Comic Sans MS" style={{'font-family':'Comic Sans MS'}}>Comic Sans MS</a></li>
                    <li><a data-edit="fontName Helvetica" style={{'font-family':'Helvetica'}}>Helvetica</a></li>
                    <li><a data-edit="fontName Impact" style={{'font-family':'Impact'}}>Impact</a></li>
                    <li><a data-edit="fontName Lucida Grande" style={{'font-family':'Lucida Grande'}}>Lucida Grande</a></li>
                    <li><a data-edit="fontName Lucida Sans" style={{'font-family':'Lucida Sans'}}>Lucida Sans</a></li>
                    <li><a data-edit="fontName Tahoma" style={{'font-family':'Tahoma'}}>Tahoma</a></li>
                    <li><a data-edit="fontName Times" style={{'font-family':'Times'}}>Times</a></li>
                    <li><a data-edit="fontName Times New Roman" style={{'font-family':'Times New Roman'}}>Times New Roman</a></li>
                    <li><a data-edit="fontName Verdana" style={{'font-family':'Verdana'}}>Verdana</a></li>
                </ul>
            </div>
        );
    }
});
