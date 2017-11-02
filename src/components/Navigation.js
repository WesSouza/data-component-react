import React from 'react';

const Navigation = ({ items }) => (
  <ul>
    {items.map(item => 
      <li key={item.url}><a href={item.url}>{item.name}</a></li>
    )}
  </ul>
);

export default Navigation;
