import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import SeedList from './components/SeedList';
import SeedDetail from './components/SeedDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [seeds, setSeeds] = useState([]);
  const [selectedSeed, setSelectedSeed] = useState(null);

  useEffect(() => {
    const fetchSeeds = async () => {
      let query = `/api/seeds/search?q=${searchQuery}`;

      if (filters.difficulty) {
        query += `&difficulty=${filters.difficulty}`;
      }

      if (filters.category) {
        query += `&category=${filters.category}`;
      }

      if (filters.sowMonth) {
        query += `&sowMonth=${filters.sowMonth}`;
      }

      const response = await fetch(query);
      const data = await response.json();
      setSeeds(data);
    };

    fetchSeeds();
  }, [searchQuery, filters]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <Header />
      <section className="w-full p-6 flex justify-center">
        <div className="w-full max-w-[90rem] flex space-x-6">
          <div className="w-2/5 p-6">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Filter filters={filters} setFilters={setFilters} />
          </div>
          <div className="w-3/5 p-6 overflow-y-auto h-[80vh]">
          {selectedSeed ? (
              <SeedDetail seed={selectedSeed} onBack={() => setSelectedSeed(null)} />
            ) : (
              <SeedList seeds={seeds} onSelect={setSelectedSeed} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
  
  
}

export default App;
