var React = require('react');

var DoorsResults = React.createClass({
    render: function() {
        return (
<div className="field_wrapper">
    <div className="bordered_wrapper_up disabled">
        <h4>Portes</h4>
    </div>
    <div className="bordered_wrapper_down disabled">
        <div className="form-horizontal">
            <label className="col-3">Revêtement :</label>
            <p className="col-7">{ this.props.doors_laminate } m<sup>2</sup></p>
        </div>
        <div className="form-horizontal">
            <label className="col-3">Colle :</label>
            <p className="col-7">{ this.props.doors_glue } m<sup>2</sup></p>
        </div>
        <div className="form-horizontal">
            <label className="col-3">Panneau :</label>
            <p className="col-7">{ this.props.doors_board } m<sup>2</sup></p>
        </div>
        <div className="form-horizontal">
            <label className="col-3">Chants :</label>
            <p className="col-7">{ this.props.doors_banding } ml</p>
        </div>
    </div>
</div>
        );
    }
});

module.exports = DoorsResults;
