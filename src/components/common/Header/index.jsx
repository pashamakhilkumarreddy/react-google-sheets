import { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

const Header = () => {
  const [activeItem, setActiveItem] = useState('home');
  const handleOnClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Menu pointing secondary as='header'>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleOnClick}
      />
    </Menu>
  );
};

export default Header;
