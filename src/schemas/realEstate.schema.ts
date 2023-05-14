import { z } from "zod";
import { addressSchemaRequest } from "./addresses.schemas"

const realEstateSchema = z.object({
    id: z.number(),
    value: z.number().default(0),
    size: z.number().int(),
    address: addressSchemaRequest,
    category: z.number().int(),
    sold: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date(),
});

const realEstateSchemaRequest = realEstateSchema.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true
})
// .extend() de Adress

const realEstateSchemaResponse = realEstateSchema;

const realEstatesSchemaResponse = z.array(realEstateSchema)

export {
    realEstateSchema,
    realEstateSchemaRequest,
    realEstateSchemaResponse,
    realEstatesSchemaResponse
}