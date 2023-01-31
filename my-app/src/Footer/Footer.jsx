import React, { useState } from 'react';
import news from '../image/news.png';
import color from '../image/color.png';
import { Link } from 'react-router-dom';
function Footer() {
    const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id === selected ? null : id);
  };

  return (
    <div className="footer">
      <Link to={'/News'}>
        <img
          src={news}
          alt="news"
          onClick={() => handleClick(1)}
          style={{ filter: selected === 1 ? 'invert(100%)' : 'invert(0)' }}
        />
      </Link>
      <Link to={'/Color'}>
        <img
          src={color}
          alt="color"
          onClick={() => handleClick(2)}
          style={{ filter: selected === 2 ? 'invert(100%)' : 'invert(0)' }}
        />
      </Link>
    </div>
  );
}
export default Footer