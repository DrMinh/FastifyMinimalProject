import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';

export async function testRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
        console.log('get data', request.query);
        reply.send({ users: [] });
    });


}