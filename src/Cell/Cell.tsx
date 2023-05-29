import React from 'react';

interface CellProps {
  hasItem: boolean;
  clicked: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, onClick }) => {
  const cellStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={cellStyle} onClick={onClick}>
      {clicked ? (hasItem ? 'O' : '') : ''}
    </div>
  );
};

export default Cell;
