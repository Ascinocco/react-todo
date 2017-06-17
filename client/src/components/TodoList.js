import React, { Component } from 'react';

export default class TodoList extends Component {

    generateId () {
        return Math.floor(Math.random() * 90000) + 10000;
    }

    addTodo (task) {
        let data = this.state.data;
        let id = this.generateId().toString();
        let complete = false;
        data.push({id: id, task: task, complete: complete});
        this.setState(data);
    }

    completeTodo () {

    }

    getInitialState() {
        return {
            data: [
                { id: "1", task: "Buy clothes", complete: false },
                { id: "2", task: "Wash Car", complete: false },
                { id: "3", task: "Make Dinner", complete: false },
            ]
        }
    }

    render () {
        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    <ul>
                        <li>Shopping</li>
                        <li>Wash Car</li>
                        <li>Make Dinner</li>
                    </ul>
                </div>
            </div>
        );
    } 
}