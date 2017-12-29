import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    remove(event) {
        this.props.remove(event);
    }

    render() {
        return (
            <div>
                <li className="alert alert-info">{this.props.todo}</li>
                <div className="button-wrapper">
                    <button onClick={ this.edit } id={ this.props.id + " " + this.props.pk } className="btnn btn btn-success">Edit</button>
                    <button onClick={ this.remove.bind(this) } id={ this.props.id + " " + this.props.pk } className="btnn btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }

}

export default TodoItem;