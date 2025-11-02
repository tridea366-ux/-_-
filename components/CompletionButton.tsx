
import React, { useState, useEffect } from 'react';

interface CompletionButtonProps {
  isCompleted: boolean;
  onComplete: () => void;
}

const CompletionButton: React.FC<CompletionButtonProps> = ({ isCompleted, onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);
  
  const handleClick = () => {
    onComplete();
    setIsFinished(true);
  };

  // Reset button state if tasks are unchecked after completion
  useEffect(() => {
    if (!isCompleted) {
      setIsFinished(false);
    }
  }, [isCompleted]);

  return (
    <button
      onClick={handleClick}
      disabled={!isCompleted || isFinished}
      className="bg-green-500 text-white p-4 rounded-xl text-xl font-semibold mt-1 cursor-pointer w-full max-w-md transition-all duration-300 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70 transform active:scale-95"
    >
      {isFinished ? 'お疲れ様でした！' : 'すべての作業が完了'}
    </button>
  );
};

export default CompletionButton;
