import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';

export async function testRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.addContentTypeParser('*', function (request, payload, done) {
        var data = ''
        payload.on('data', chunk => { data += chunk })
        payload.on('end', () => {
            console.log('parse data: ', data);
            done(null, data)
        })
    });

    fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
        console.log('get data', request.query);
        reply.send({ users: [] });
    });

    fastify.post('/test', async (request: FastifyRequest, reply: FastifyReply) => {
        console.log('post data: ', request.query);
        console.log('psot body: ', request.body);
        reply.send({ users: [] });
    });
}