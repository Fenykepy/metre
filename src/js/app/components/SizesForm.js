var React = require('react');

var SizesForm = React.createClass({
    render: function() {
        return (
<div className="field_wrapper">
    <div className="bordered_wrapper_up">
        <h4>Dimensions</h4>
    </div>

    <div className="bordered_wrapper_down">
        <div className="form-horizontal">
            <label className="col-2" for="width">Largeur <span className="unit">(mm)</span> :</label>
            <input className="col-2" name="width" type="number" min="0" step="any" required/>
            
            <label className="col-2" for="height">Haut. <span className="unit">(mm)</span> :</label>
            <input className="col-2" name="height"type="number" min="0" step="any" required/>
            
            <label className="col-2" for="depth">Prof. <span className="unit">(mm)</span> :</label>
            <input className="col-2" name="depth"type="number" min="0" step="any" required/>
        </div>
    </div>
</div>
        );
    }
});



module.exports = SizesForm;
