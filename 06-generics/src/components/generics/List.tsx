import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: string) => void;
};

const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h1>I am List Component</h1>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
