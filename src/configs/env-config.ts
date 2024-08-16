import fastifyEnv from "@fastify/env";
import { Static, Type } from "@sinclair/typebox";
import { FastifyInstance } from "fastify";
console.log('rruuun!');
// Define the schema using TypeBox  
const schema = Type.Object({
    PORT: Type.String({ default: '3000' }),
    HOST: Type.Optional(Type.String()),
    TEST: Type.Number()
});

// Extract TypeScript type from the schema
export type EnvSchema = Static<typeof schema>;

export function configEnv(fastify: FastifyInstance) {
    fastify
        .register(
            fastifyEnv,
            { schema: schema, dotenv: true }
        )
        .ready((err) => {
            if (err) console.error(err);
            console.log('ENV setup successful: ', fastify.getEnvs());
        });

}