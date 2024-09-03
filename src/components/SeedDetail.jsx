import React from 'react';

function SeedDetail({ seed, onBack }) {
  return (
    <div>
      <button onClick={onBack} className="mb-4 text-lime-500 hover:underline">
        &larr; Back to list
      </button>
      <img src={seed.mainImageUrl} alt={seed.name} className="w-full h-64 object-cover mb-4 rounded-md" />
      <h2 className="text-2xl font-bold mb-2">{seed.name}</h2>
      <p className="italic text-gray-600 mb-4">{seed.latinName}</p>
      <div className="mb-4">
        <strong>Difficulty:</strong> {['Easy', 'Medium', 'Hard'][seed.difficulty - 1]}
      </div>
      <div className="mb-4">
        <strong>Space Between Plants:</strong> {seed.spaceBetweenPlants} cm
      </div>
      <div className="mb-4">
        <strong>Germinal Capacity:</strong> {seed.germinalCapacity}
      </div>
      <div className="mb-4">
        <strong>Category:</strong> {seed.plantCategory.name}
      </div>
    </div>
  );
}

export default SeedDetail;
