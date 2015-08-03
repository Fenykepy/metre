var React = require('react');


var BoxForm = React.createClass({
    render: function() {
        return (
<div className="field_wrapper">
    <div className="bordered_wrapper_up">
        <h4>Caisson</h4>
    </div>

    <div className="bordered_wrapper_down">
        <div className="form-horizontal">
            <label className="col-4" for="v_sep">Cloisons verticales :</label>
            <input className="col-2" name="v_sep" type="number" min="1" step="1" value="2" required/>

            <label className="col-4" for="h_sep">Cloisons horizontales :</label>
            <input className="col-2" name="h_sep" type="number" min="1" step="1" value="2" required/>
        </div>
        <div className="checkbox">
            <label for="no_back"><input name="no_back" type="checkbox" id="no_back" />meuble sans fond</label>
        </div>
        
        <div className="row">
            <div className="col-4 radio">
                <label for="box_regular"><input name="box_leak" type="radio" id="box_regular" value="1.2" checked />
                décors uni (perte 1.2)</label>
            </div>
            <div className="col-4 radio">
                <label for="box_grain"><input name="box_leak" type="radio" id="box_grain" value="1.35" />
                décors avec fil (perte 1.35)</label>
            </div>
            <div className="col-4 radio">
                <label for="box_custom"><input name="box_leak" type="radio" id="box_custom" />
                    perte personnalisée : <input type="number" step=".01" value="1.20" /></label>
            </div>
        </div>
    </div>
</div>
     
        );
    }
});



module.exports = BoxForm;
