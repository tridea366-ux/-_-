
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5 text-center">{title}</h1>
  );
};

export default Header;
