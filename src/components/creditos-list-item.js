import React from 'react';

class CreditosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { credito, isCompleted } = this.props;

        const taskStyle = {
            color: isCompleted ? '#3161a5' : '#3161a5',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={credito} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, credito)}
            >
                {credito}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.credito)}>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.credito;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}
export default CreditosListItem;