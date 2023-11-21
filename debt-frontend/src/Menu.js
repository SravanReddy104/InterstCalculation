import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getDataAsc,getDataAmountHigh,getDataAmountLow,getDataDesc } from './Features/DataSlice';

const MenuItem = ({ label, action }) => {
  return <li className="menu-item" onClick={action}>{label}</li>;
};

const DropdownMenu = ({ items }) => {
  return (
    <ul className="menu-list">
      {items.map(item => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

const Menu = () => {
    const dispatch = useDispatch()
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { id: 1, label: 'Newest', action: () => dispatch(getDataAsc())},
    { id: 2, label: 'Oldest', action: () => dispatch(getDataDesc()) },
    { id: 3, label: 'High in Amount', action: () => dispatch(getDataAmountHigh()) },
    { id: 4, label: 'Low in Amount', action: () => dispatch(getDataAmountLow()) },

  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`menu-container`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>Menu</span>
        <span className={`dropdown-icon`}>▼</span>
      </div>
      <div className="dropdown-content">
        {isDropdownOpen && <DropdownMenu items={menuItems} />}
      </div>
    </div>
  );
};

export default Menu;
