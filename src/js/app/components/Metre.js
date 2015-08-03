var React = require('react');

var DoorsResults = require('./DoorsResults');
var BoxResults = require('./BoxResults');
var WorkforceResults = require('./WorkforceResults');

// leaks coefs
var banding_leak = 1.2;

var Metre = React.createClass({
    getInitialState: function() {
        return {
            width: null,
            height: null,
            depth: null,

            v_sep: 2,
            h_sep: 2,
            no_back: false,
            box_leak: 1.2,

            nb_doors: 0,
            doors_position: "horizontal",
            doors_leak: 1.2,
            
            doors_laminate: null,
            doors_glue: null,
            doors_board: null,
            doors_banding: null,
            
            box_board: null,
            //box_laminate: null,
            //box_glue: null,
            box_banding: null,

            work_cut_time: null,
            work_plating_time: null
        };
    },
    computeAll: function() {
        this.computeDoors();
        this.computeBox();
    },
    computeBox: function() {
        if (! this.state.width || ! this.state.height ||
                              ! this.state.depth) {
            return;
        }
        var v_sep = this.state.v_sep;
        var h_sep = this.state.h_sep;

        var width = this.state.width / 1000;
        var height = this.state.height / 1000;
        var depth = this.state.depth / 1000;

        var board = 0, banding = 0;

        // add back surface if necessary
        if (! this.state.no_back) {
            board = width * height;
        }
        // compute board surface
        board = (board + width * depth * h_sep + height * depth * v_sep) 
            * this.state.box_leak;

        // compute banding length
        banding = (v_sep * height + h_sep * width) * banding_leak;
        // save state and refresh work force
        this.setState({
            box_board: board,
            box_banding: banding
        }, this.computeWork);
    },
    computeDoors: function() {
        return;
    },
    computeWork: function() {
        var cut = (this.state.box_board + this.state.doors_board
                              + this.state.doors_laminate) * 0.05;
        var plating = (this.state.box_banding + this.state.doors_banding) / 60;
        
        this.setState({
            work_cut_time: cut,
            work_plating_time: plating
        });
    },
    widthChange: function(e) {
        this.setState({
            width: e.target.value
        }, this.computeAll);
    },
    heightChange: function(e) {
        this.setState({
            height: e.target.value
        }, this.computeAll);
    },
    depthChange: function(e) {
        this.setState({
            depth: e.target.value
        }, this.computeAll);
    },
    v_sepChange: function(e) {
        this.setState({
            v_sep: e.target.value
        }, this.computeBox);
    },
    h_sepChange: function(e) {
        this.setState({
            h_sep: e.target.value
        }, this.computeBox);
    },
    no_backChange: function(e) {
        this.setState({
            no_back: ! this.state.no_back
        }, this.computeBox);
    },

    render: function() {
        return (
            <div>
                <div className="field_wrapper">
                    <div className="bordered_wrapper_up">
                        <h4>Dimensions</h4>
                    </div>

                    <div className="bordered_wrapper_down">
                        <div className="form-horizontal">
                            <label className="col-2"
                                   for="width">Largeur <span className="unit">(mm)</span> :</label>
                               <input className="col-2"
                                      name="width"
                                      type="number"
                                      min="0" step="any"
                                      value={this.state.width}
                                      onChange={this.widthChange}
                                      required />
                            
                            <label className="col-2"
                                   for="height">Haut. <span className="unit">(mm)</span> :</label>
                               <input className="col-2"
                                      name="height"
                                      type="number"
                                      min="0" 
                                      step="any" 
                                      value={this.state.height}
                                      onChange={this.heightChange}
                                      required />
                            
                            <label className="col-2"
                                   for="depth">Prof. <span className="unit">(mm)</span> :</label>
                               <input className="col-2"
                                      name="depth"
                                      type="number"
                                      min="0"
                                      step="any"
                                      value={this.state.depth}
                                      onChange={this.depthChange}
                                      required />
                        </div>
                    </div>
                </div>


                <div className="field_wrapper">
                    <div className="bordered_wrapper_up">
                        <h4>Caisson</h4>
                    </div>

                    <div className="bordered_wrapper_down">
                        <div className="form-horizontal">
                            <label className="col-4" for="v_sep">Cloisons verticales :</label>
                            <input className="col-2"
                                   name="v_sep"
                                   type="number"
                                   min="1"
                                   step="1"
                                   value={this.state.v_sep}
                                   onChange={this.v_sepChange}
                                   required />
                            <label className="col-4" for="h_sep">Cloisons horizontales :</label>
                            <input className="col-2"
                                   name="h_sep"
                                   type="number"
                                   min="1"
                                   step="1"
                                   value={this.state.h_sep}
                                   onChange={this.h_sepChange}
                                   required />
                        </div>
                        <div className="checkbox">
                            <label for="no_back"><input
                                    name="no_back"
                                    type="checkbox"
                                    checked={this.state.no_back}
                                    onChange={this.no_backChange}
                                    id="no_back" />meuble sans fond</label>
                        </div>
                        <div className="row">
                            <div className="col-4 radio">
                                <label for="box_regular"><input
                                        name="box_leak"
                                        type="radio"
                                        id="box_regular"
                                        value="1.2"
                                        checked={this.state.box_leak == 1.2} />
                                décors uni (perte 1.2)</label>
                            </div>
                            <div className="col-4 radio">
                                <label for="box_grain"><input
                                        name="box_leak"
                                        type="radio"
                                        id="box_grain"
                                        value="1.35"
                                        checked={this.state.box_leak == 1.35} />
                                décors avec fil (perte 1.35)</label>
                            </div>
                            <div className="col-4 radio">
                                <label for="box_custom"><input name="box_leak" type="radio" id="box_custom" />
                                    perte personnalisée : <input type="number" step=".01" value="1.20" /></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="field_wrapper">
                    <div className="bordered_wrapper_up">
                        <h4>Portes</h4>
                    </div>

                    <div className="bordered_wrapper_down">
                        <div className="form-horizontal">
                            <label className="col-3" for="nb_doors">Nombre de portes :</label>
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
                
                <DoorsResults 
                    doors_laminate={this.state.doors_laminate}
                    doors_glue={this.state.doors_glue}
                    doors_board={this.state.doors_board}
                    doors_banding={this.state.doors_banding}
                />
                <BoxResults
                    box_board={this.state.box_board}
                    box_banding={this.state.box_banding}
                />
                <WorkforceResults
                    work_cut_time={this.state.work_cut_time}
                    work_plating_time={this.state.work_plating_time}
                />
            </div>
        );
    }
});

module.exports = Metre;
