import React from 'react';
import '../index.css'


function Filter({ filters, setFilters }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleDifficultyChange = (e) => {
    setFilters({ ...filters, difficulty: parseInt(e.target.value) });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <label className="block text-gray-700">Difficulty</label>
        <input
          type="range"
          name="difficulty"
          min="1"
          max="3"
          value={filters.difficulty || 1}
          onChange={handleDifficultyChange}
          className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>

      <div>
        <label className="block text-gray-700">Category</label>
        <select
          name="category"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleInputChange}
        >
          <option value="">Any</option>
          <option value="Aromatiques">Aromatiques</option>
          <option value="Potagères">Potagères</option>
          <option value="Engrais Vert">Engrais Vert</option>
          <option value="Fleurs">Fleurs</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700">Sow Month</label>
        <select
          name="sowMonth"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleInputChange}
        >
          <option value="">Any</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;

