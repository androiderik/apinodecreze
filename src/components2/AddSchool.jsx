var React = require("react");
var actions = require("../actions/SchoolActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          NombreCl:"",
          Mont:""
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
            <form className="form" className="col-md-4 col-md-offset-4" onSubmit={this.addEscuela} >
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Nombre cliente:</label>
                    <input type="text" className="form-control" id="name" name="UserName" value={this.state.name} onChange={this.handleInputChange} placeholder="Nombre Cliente" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Contraseña:</label>
                    <input type="text" className="form-control" id="tagline" name="password" value={this.state.address} onChange={this.handleInputChange} placeholder="Password" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">E-mail:</label>
                    <input type="text" className="form-control" id="tagline" name="Email" value={this.state.name} onChange={this.handleInputChange} placeholder="E-mail" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Usuario:</label>
                    <input type="text" className="form-control" id="tagline" name="username" value={this.state.name} onChange={this.handleInputChange} placeholder="Usuario" />                    
                </div>
                <div className="form-group col-md-4 col-md-offset-4">
                    <button className="btn" type="submit">REGISTRO</button>
                </div>
            </form>
        )
    }
})