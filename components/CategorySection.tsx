
import React, { useEffect, useRef } from 'react';
import { type Category } from '../types';
import CheckboxItem from './CheckboxItem';

interface CategorySectionProps {
  category: Category;
  tasks: Record<string, boolean>;
  onTaskToggle: (categoryId: string, itemText: string) => void;
  speak: (text: string, force?: boolean) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, tasks, onTaskToggle, speak }) => {
  const isCompletedRef = useRef(false);

  useEffect(() => {
    const allChecked = Object.values(tasks).every(Boolean);

    if (allChecked && !isCompletedRef.current) {
      isCompletedRef.current = true;
      const timer = setTimeout(() => speak(`${category.title}、完了しました`, true), 700);
      return () => clearTimeout(timer);
    } else if (!allChecked) {
      isCompletedRef.current = false;
    }
  }, [tasks, category.title, speak]);
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-5 w-full max-w-md">
      <h2 className="text-xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2 mb-3">
        {category.title}
      </h2>
      <div>
        {category.items.map(item => (
          <CheckboxItem 
            key={item}
            text={item}
            isChecked={tasks[item]}
            onToggle={() => onTaskToggle(category.id, item)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
