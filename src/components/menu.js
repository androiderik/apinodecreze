import React from 'react';

 class Nav extends React.Component {
    constructor(props) { //Estado inicial del componente App
            super(props);

            this.state = {
               logo: 'creze-logo.png',
               inicio:'/'
            };
    }
    render() {
        return (
         
              <nav className="navbar navbar-default backgroundnav">
                 <div className="container-fluid mainav">
			    <div className="navbar-header">
			      <img src={this.state.logo}className="logo" alt="logocreze" />
               
			    </div>
			    <ul className="nav navbar-nav">
			      <li className="active navtext "><a href= {this.state.inicio}>Inicio</a></li>
			      <li><a className="navtext" href="/about">Acerca de</a></li>
			    </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/signup"><span className="glyphicon glyphicon-user"></span>Registrarse</a></li>
                  <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span>Ingresar</a></li>
                </ul>
                   </div>
			  </nav>
         
         
        );
    }
}



export default Nav;







