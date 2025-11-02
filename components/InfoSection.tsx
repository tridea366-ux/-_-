
import React from 'react';

interface InfoSectionProps {
  workDate: string;
  setWorkDate: (date: string) => void;
  selectedName: string;
  handleNameChange: (name: string) => void;
  names: string[];
}

const InfoSection: React.FC<InfoSectionProps> = ({
  workDate,
  setWorkDate,
  selectedName,
  handleNameChange,
  names,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-5 w-full max-w-md">
      <div>
        <label htmlFor="workDate" className="block font-semibold text-gray-700 text-lg">
          作業日を選んでください
        </label>
        <input
          type="date"
          id="workDate"
          value={workDate}
          onChange={(e) => setWorkDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl text-lg mt-2 box-sizing-border"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="nameSelect" className="block font-semibold text-gray-700 text-lg">
          お名前を選んでください
        </label>
        <select
          id="nameSelect"
          value={selectedName}
          onChange={(e) => handleNameChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl text-lg mt-2 box-sizing-border bg-white"
        >
          <option value="">選択してください</option>
          {names.map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InfoSection;
