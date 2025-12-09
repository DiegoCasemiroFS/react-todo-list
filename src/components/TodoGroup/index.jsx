import { SubHeading } from "../SubHeading";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";


export function TodoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <TodoList>
        {items.map(function (t) {
          return <TodoItem
            key={t.id}
            item={t}
          />
        })}
      </TodoList>
    </>
  );
}