import { FC } from 'react';
import { Todo } from '../../types/Todo';
import { TodoComponent } from '../TodoComponent';

type Props = {
  todos: Todo[],
};

export const TodoList:FC<Props> = ({ todos }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoComponent
          key={todo.id}
          todo={todo}
        />
      ))}
    </section>
  );
};