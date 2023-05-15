import { z } from "zod";
import { addressSchema, addressSchemaRequest } from "./addresses.schemas";
import { categorySchema } from "./categories.schemas";

const realEstateSchema = z.object({
  id: z.number(),
  value: z.string().or(z.number()).default(0),
  size: z.number().int().positive(),
  address: addressSchema,
  category: categorySchema,
  sold: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const realEstateSchemaRequest = z.object({
  value: z.string().or(z.number()).default(0),
  size: z.number().int().positive(),
  address: addressSchemaRequest,
  categoryId: z.number(),
});

const manyRealEstatesSchemaResponse = z.array(realEstateSchema);

const realEstateScheduleSchemaResponse = realEstateSchema.extend({manyRealEstatesSchemaResponse});

export {
  realEstateSchema,
  realEstateSchemaRequest,
  realEstateScheduleSchemaResponse,
  manyRealEstatesSchemaResponse,
};
