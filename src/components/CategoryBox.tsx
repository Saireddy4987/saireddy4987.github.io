
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryBoxProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ name, icon, color }) => {
  return (
    <Link 
      to={`/blog/category/${name.toLowerCase().replace(' ', '-')}`}
      className={`category-box ${color} flex flex-col items-center animate-fade-in`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <span className="font-medium">{name}</span>
    </Link>
  );
};

export default CategoryBox;
