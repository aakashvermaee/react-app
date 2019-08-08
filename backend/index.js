const fastify = require('fastify')({
  logger: {
    level: 'info',
    enabled: true,
    prettyPrint: true
  }
});

const PORT = 4000, HOST = '0.0.0.0';

fastify.register(require('fastify-cors'), {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

fastify.register(require('./routes/v1/routes'), { prefix: '/api/v1' });

fastify.get('/', (req, reply) => reply.send('backend running!'));

fastify.listen(PORT, HOST, (err) => {
  if (err) throw err;

  console.log(`backend running on http://localhost:${PORT}`);
});