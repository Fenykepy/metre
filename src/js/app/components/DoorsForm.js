var React = require('react');


var DoorsForm = React.createClass({
    render: function() {
        return (
<div className="field_wrapper">
    <div className="bordered_wrapper_up">
        <h4>Portes</h4>
    </div>

    <div className="bordered_wrapper_down">
        <div className="form-horizontal">
            <label className="col-3" for="nb_doors"> Nombre de portes :</label>
            <input className="col-9" name="nb_doors" type="number" min="0" step="1" value="0" required/>

        </div>
        <div className="row">
            <div className="col-5 col-center radio">
                <label for="h_doors"><input name="doors_position" type="radio" id="h_doors" value="horizontal" checked />
                portes juxtaposées</label>
            </div>
            <div className="col-5 col-center radio">
                <label for="v_doors"><input name="doors_position" type="radio" id="v_doors" value="vertical" />
                portes superposées</label>
            </div>
        </div>
        <div className="row">
            <div className="col-4 radio">
                <label for="doors_regular"><input name="doors_leak" type="radio" id="doors_regular" value="1.2" checked />
                décors uni (perte 1.2)</label>
            </div>
            <div className="col-4 radio">
                <label for="doors_grain"><input name="doors_leak" type="radio" id="doors_grain" value="1.35" />
                décors avec fil (perte 1.35)</label>
            </div>
            <div className="col-4 radio">
                <label for="doors_custom"><input name="doors_leak" type="radio" id="doors_custom" />
                    perte personnalisée : <input type="number" step=".01" value="1.20" /></label>
            </div>
        </div>
    </div>
</div>

        );
    }
});



module.exports = DoorsForm;
