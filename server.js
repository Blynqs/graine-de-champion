import Fastify from 'fastify';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seeds = JSON.parse(readFileSync(path.join(__dirname, 'src/seeds.json')));

const fastify = Fastify({ logger: true });

fastify.get('/api/seeds', (request, reply) => {
  reply.send(seeds);
});

fastify.get('/api/seeds/search', (request, reply) => {
  const query = request.query.q?.toLowerCase() || '';
  const difficulty = parseInt(request.query.difficulty) || null;
  const category = request.query.category?.toLowerCase() || null;
  const sowMonth = request.query.sowMonth?.toLowerCase() || null;

  let filteredSeeds = seeds;

  if (query) {
    filteredSeeds = filteredSeeds.filter(seed =>
      seed.name.toLowerCase().includes(query)
    );
  }

  if (difficulty !== null) {
    filteredSeeds = filteredSeeds.filter(seed => seed.difficulty === difficulty);
  }

  if (category) {
    filteredSeeds = filteredSeeds.filter(seed =>
      seed.plantCategory?.name?.toLowerCase().includes(category)
    );
  }

  if (sowMonth) {
    filteredSeeds = filteredSeeds.filter(seed => seed.sowWarm[sowMonth] || seed.sow[sowMonth]);
  }

  reply.send(filteredSeeds);
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server listening on http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
