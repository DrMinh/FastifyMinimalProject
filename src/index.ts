import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { configEnv, EnvSchema } from './configs';
import { routes } from './routes';

const fastify = Fastify({
    //logger: true
}).withTypeProvider<TypeBoxTypeProvider>();

configEnv(fastify);

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' });
});

fastify.register(routes);

// Run the server!
async function startServer() {
    await fastify;

    fastify.listen(
        {
            port: fastify.getEnvs<EnvSchema>().PORT,
            host: fastify.getEnvs<EnvSchema>().HOST,
        },
        function (err, address) {
            if (err) {
                fastify.log.error(err);
                process.exit(1);
            }
            console.log(`Server is now listening on ${address}`);
        }
    );
}

startServer();