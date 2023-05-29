import React from 'react';
import Cell from './Cell/Cell';

interface Item {
  hasItem: boolean;
  clicked: boolean;
}

const createItems = (): Item[] => {
  const items: Item[] = [];
  for (let i = 0; i < 36; i++) {
    items.push({ hasItem: false, clicked: false });
  }

  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;

  return items;
};

const App: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>(createItems());
  const [attempts, setAttempts] = React.useState<number>(0);

  const handleCellClick = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].clicked = true;

    setItems(updatedItems);
    setAttempts((prevAttempts) => prevAttempts + 1);
  };

  const handleReset = () => {
    setItems(createItems());
    setAttempts(0);
  };

  const gameBoardStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 50px)',
    gridGap: '5px',
  };
  return (
    <div>
      <div>Attempts: {attempts}</div>
      <div style={gameBoardStyle}>
        {items.map((item, index) => (
          <Cell
            key={index}
            hasItem={item.hasItem}
            clicked={item.clicked}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
