import { z } from "zod";

const categoriesSchema = z.object({
    id: z.number(),
    name: z.string()
});

const categorySchemaRequest = categoriesSchema.omit({
    id: true
});

const categoriesSchemaResponse = z.array(categoriesSchema);

export { categoriesSchema, categorySchemaRequest, categoriesSchemaResponse }