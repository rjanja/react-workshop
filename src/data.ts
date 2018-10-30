import uuidv4 from 'uuid/v4';
import { Todo } from './interfaces';

export const makeTodo = (title: string): Todo => (
    {
        completed: false,
        id: uuidv4(),
        title
    }
)

export class Data {
    todos: Todo[]

    constructor(todos: Todo[]) {
        this.todos = todos;
    }

    addTodo = (title: string) =>
        this.todos = [...this.todos, makeTodo(title)];
    
    deleteTodo = (todo: Todo) =>
        this.todos = this.todos.filter(t => t.id !== todo.id);

    updateTodo = (todo: Todo) =>
        this.todos = this.todos.map(t => t.id === todo.id ? todo : t);

    toggleAll = () => {
        const activeCount = this.todos.filter(t => !t.completed).length;
        this.todos = this.todos.map(t => ({ ...t, status: activeCount > 0 }));
    };

    deleteCompleted = (todo: Todo) =>
        this.todos = this.todos.filter(t => !t.completed);
}