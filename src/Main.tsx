import React from "react";
import { Data, makeTodo } from './data';
import { Footer } from './Footer';
import { Header } from './Header';
import { ListItem } from './ListItem';

// tslint:disable no-console
const debug = (msg: string) => () => console.log(msg);

interface State {
  data: Data
};

export class Main extends React.PureComponent<{}, State> {
  state = {
    data: new Data([makeTodo('Pay Visa'), makeTodo('Go Shopping')])
  };

  addTodo = (title: string) => {
    this.state.data.addTodo(title);
    this.setState({});
  };

  render() {
    debug('rendering main component')();
    return (
      <div className="todomvc-wrapper">
        <section className="todoapp">
          <Header onSubmit={this.addTodo} />
          
          <section className="main">
            <input
              className="toggle-all"
              id="toggle-all"
              type="checkbox"
              checked={false}
              onChange={this.state.data.toggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>

            {/* TODO list */}
            <ul className="todo-list">

            {this.state.data.todos.map(t => (
              <ListItem 
                key={t.id}
                item={t}
                handleDestroy={this.state.data.deleteTodo}
                handleEdit={this.state.data.updateTodo}
              />
            ))}

            </ul>
          </section>
        </section>

        <Footer 
          todoCount={this.state.data.todos.length} 
          clearCompleted={this.state.data.deleteCompleted}
        />
      </div>
    );
  }
}

