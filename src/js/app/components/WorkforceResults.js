var React = require('react');

var WorkforceResults = React.createClass({
    render: function() {
        return (

<div className="field_wrapper">
    <div className="bordered_wrapper_up disabled">
        <h4>Main d'œuvre</h4>
    </div>
    <div className="bordered_wrapper_down disabled">
        <div className="form-horizontal">
            <label className="col-5">Débit <span className="unit">(S<sub>t</sub> x 0.05)</span> :</label>
            <p className="col-7">{ this.props.work_cut_time.toFixed(4) } heures</p>
        </div>
        <div className="form-horizontal">
            <label className="col-5">Placage de chants <span className="unit">(L<sub>t</sub> / 60)</span> :</label>
            <p className="col-7">{ this.props.work_plating_time.toFixed(4) } heures</p>
        </div>
    </div>
</div>
        );
    }
});


module.exports = WorkforceResults;
