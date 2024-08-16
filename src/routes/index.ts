import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { testRoutes } from "./test.routes";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.register(testRoutes);
}