
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CHECKLIST_CATEGORIES, NAMES } from './constants';
import { type TaskState } from './types';
import { useTextToSpeech } from './hooks/useTextToSpeech';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import CategorySection from './components/CategorySection';
import CompletionButton from './components/CompletionButton';

const initializeTasks = (): TaskState => {
  const initialState: TaskState = {};
  CHECKLIST_CATEGORIES.forEach(category => {
    initialState[category.id] = {};
    category.items.forEach(item => {
      initialState[category.id][item] = false;
    });
  });
  return initialState;
};

const App: React.FC = () => {
  const [workDate, setWorkDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedName, setSelectedName] = useState<string>('');
  const [tasks, setTasks] = useState<TaskState>(initializeTasks());
  const [isAllCompleteAnnounced, setIsAllCompleteAnnounced] = useState(false);

  const { speak } = useTextToSpeech();

  useEffect(() => {
    const timer = setTimeout(() => speak("作業日を選んでください", true), 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNameChange = (name: string) => {
    setSelectedName(name);
    if (name) {
      speak(`${name}さん。`, true);
    }
  };
  
  const handleTaskToggle = useCallback((categoryId: string, itemText: string) => {
    setTasks(prevTasks => {
      const newTasks = { ...prevTasks };
      newTasks[categoryId] = { ...newTasks[categoryId] };
      newTasks[categoryId][itemText] = !newTasks[categoryId][itemText];
      return newTasks;
    });
  }, []);

  const allTasksCompleted = useMemo(() => {
    return CHECKLIST_CATEGORIES.every(category => 
      category.items.every(item => tasks[category.id][item])
    );
  }, [tasks]);
  
  useEffect(() => {
    if (allTasksCompleted && !isAllCompleteAnnounced) {
        speak("すべての項目をチェックしました。完了ボタンを押してください。", true);
        setIsAllCompleteAnnounced(true);
    } else if (!allTasksCompleted) {
        setIsAllCompleteAnnounced(false);
    }
  }, [allTasksCompleted, isAllCompleteAnnounced, speak]);

  const handleFinalCompletion = () => {
    speak("すべての作業が完了しました。お疲れ様でした。", true);
    alert("✅ すべての作業が完了しました！");
  };

  return (
    <div className="bg-slate-100 min-h-screen w-full flex flex-col items-center py-5 px-3 sm:px-5">
      <Header title="施設外実習 作業チェック" />
      
      <InfoSection 
        workDate={workDate}
        setWorkDate={setWorkDate}
        selectedName={selectedName}
        handleNameChange={handleNameChange}
        names={NAMES}
      />

      {CHECKLIST_CATEGORIES.map(category => (
        <CategorySection 
          key={category.id}
          category={category}
          tasks={tasks[category.id]}
          onTaskToggle={handleTaskToggle}
          speak={speak}
        />
      ))}

      <CompletionButton 
        isCompleted={allTasksCompleted}
        onComplete={handleFinalCompletion}
      />
    </div>
  );
};

export default App;
