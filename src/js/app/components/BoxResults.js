var React = require('react');

var BoxResults = React.createClass({
    render: function() {
        return (
<div className="field_wrapper">
    <div className="bordered_wrapper_up disabled">
        <h4>Caisson</h4>
    </div>
    <div className="bordered_wrapper_down disabled">
        <div className="form-horizontal">
            <label className="col-3">Panneau :</label>
            <p className="col-7">{this.props.box_board} m<sup>2</sup></p>
        </div>
        <div className="form-horizontal">
            <label className="col-3">Chants :</label>
            <p className="col-7">{this.props.box_banding} ml</p>
        </div>
    </div>
</div>
        );
    }
});

module.exports = BoxResults;
