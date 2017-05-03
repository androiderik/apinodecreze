import _ from 'lodash';
import React from 'react';
import CreditosListItem from './creditos-list-item';

 class CreditosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'creditos'); //bucle like for (omit)

        return _.map(this.props.creditos, (credito, index) => <CreditosListItem key={index} {...credito} {...props} />);
    }

    render() {
        return (
           
             <div className="container">
              <table className="table">
                <thead>
              <tr>
                <th>NO°</th>
                <th>Fecha</th>
                <th>Persona Fisica</th>
                <th>Monto</th>
                <th>Status</th>
                <th>Score</th>
             </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>Mayo</td>
                <td>Erik</td>
                <td>100,000</td>
                <td>Completo</td>
                <td>100</td>
                {this.renderItems()}
              </tr>
            </tbody>
              </table>
            </div>
        );
    }
}
 export default CreditosList;