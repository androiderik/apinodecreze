import React from 'react';
import CreateCredit from './create-credit';
import CreditList from './credit-list';
import $ from 'jquery';
//import uri from '../server/creditos/routes';
var resourceUrl = "http://localhost:3001/api/creditos";


const creditos = [
{
    NombreCliente: '151111,000',
    isCompleted: false
},
{
    NombreCliente: '100,000',
    isCompleted: false
}
];

class App extends React.Component {
    constructor(props) { //Estado inicial del componente App
        super(props);

        this.state = {
            creditos: creditos
        };
    }

    render() {
        return (
            <div>
                <CreditList
                    creditos={this.state.creditos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
                <CreateCredit creditos={this.state.creditos} createTask={this.createTask.bind(this)} />

            </div>
        );
    }

    toggleTask(credito) {
        const foundCredito = _.find(this.state.creditos, dato => dato.credito === credito);
        foundCredito.isCompleted = !foundCredito.isCompleted;
        this.setState({ creditos: this.state.creditos });
    }

    createTask(credito) {
         $.ajax({
            url: resourceUrl,
            data: JSON.stringify(this.state.creditos),
            method: "POST",
            dataType: "json",
            contentType:"application/json",
            beforeSend: function(){
              swal({   title: "Procesando",   
              text: "Estoy validando tus datos...", 
              showConfirmButton: false });
              },
           success: function(data){
               swal ({title: 'Datos guardados.', data:data});             
                }
                }),
                this.state.creditos.push({
                credito,
                isCompleted: false
                });
                this.setState({ creditos: this.state.creditos });
        }
       

    saveTask(oldTask, newTask) {
        const foundCredito = _.find(this.state.creditos, dato => dato.credito === oldTask);
        foundCredito.credito = newTask;
        this.setState({ creditos: this.state.creditos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.creditos, dato => dato.credito === taskToDelete);
        this.setState({ creditos: this.state.creditos });
    }
}



export default App;