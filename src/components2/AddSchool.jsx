var React = require("react");
var actions = require("../actions/SchoolActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }  
    },
    addEscuela:function(e){
        e.preventDefault();
        actions.addEscuela(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addEscuela}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Nombre cliente:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Nombre Cliente" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Monto:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Monto" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add School</button>
                </div>
            </form>
        )
    }
})