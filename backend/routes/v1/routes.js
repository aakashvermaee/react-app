module.exports = function (fastify, opts, done) {
  fastify.post('/login', login);
  fastify.post('/register', register);
  done();
}

async function login(req, reply) {
  reply.send({
    code: 200,
    message: 'Login Complete!'
  })
}

async function register(req, reply) {
  reply.send({
    code: 200,
    message: 'Registration Complete!'
  })
}