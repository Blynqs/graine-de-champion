import React from 'react';

function SeedList({ seeds, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {seeds.map(seed => (
        <div key={seed.id} className="border rounded-lg shadow-md overflow-hidden" onClick={() => {
        console.log(`Selected seed: ${seed.name}`)
        onSelect(seed)
        }}>
          <img src={seed.mainImageUrl} alt={seed.name} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-lg font-bold">{seed.name}</h2>
            <p className="text-sm italic">{seed.latinName}</p>
            <p className="mt-2">Difficulty: {seed.difficulty}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeedList;
