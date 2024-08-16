import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { configEnv, EnvSchema } from './configs';

const fastify = Fastify({
    //logger: true
}).withTypeProvider<TypeBoxTypeProvider>();

configEnv(fastify);

(async () => {
    console.log('ok')
    await fastify;
    const envtype = fastify.getEnvs<EnvSchema>();
    console.log('aa', envtype);
})()



// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' });
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    // Server is now listening on ${address}
})