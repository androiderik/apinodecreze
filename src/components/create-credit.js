import React from 'react';
import SweetAjs from 'sweetalert-react'; //js
import SweetAcss from '../../node_modules/sweetalert/dist/sweetalert.css'; //css

class CreditosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: '#3161a5' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text"className="col-md-6"  placeholder="Nombre Cliente" name="NombreCliente" ref="createInput" />
                <button>Crear</button>
                {this.renderError()}
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const credito = createInput.value;
        const validateInput = this.validateInput(credito);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(credito);
        this.refs.createInput.value = '';
    }

    validateInput(credito) {
        if (!credito) {
            swal("Debes insertar un dato.")
            return 'Sin datos'

            
        } else if (_.find(this.props.creditos, dato => dato.credito === credito)) {
            swal("Dato en existencia")
            return 'Ya existe'
            
        } else {
            return null;
        }
    }
}

export default CreditosList;
