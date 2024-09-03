import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
    <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Search seeds by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
    />
    );
};

export default SearchBar;
