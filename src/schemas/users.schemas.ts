import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    admin: z.boolean(),
    password: z.string().min(8),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.string().nullish()
})

const userSchemaRequest = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
})

const userSchemaResponse = userSchema.omit({
    password: true
})

export { userSchema, userSchemaRequest, userSchemaResponse }