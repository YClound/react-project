import React from 'react';
import TodoList from './TodoList';
import Number from './Number';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', number: 100 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      id: Date.now(),
      text: this.state.text
    }

    this.setState({
      items: this.state.items.concat(newItem),
      number: this.state.text,
      text: ''
    })
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />

        <Number number={this.state.number} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Whate needs to be done?
          </label>
          <br />
          <input
            type="text"
            id="newTodo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }
}

export default TodoApp;