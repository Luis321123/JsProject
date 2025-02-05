import { createClient } from 'redis';

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on('error', (err) => {
  console.error('Error al conectar con Redis:', err);
});

redisClient.on('connect', () => {
  console.log('Conectado a Redis exitosamente');
});

(async () => {
  try {
    await redisClient.connect();
  } catch (err) {
    console.error('Error al conectar con Redis:', err);
  }
})();

export default redisClient;