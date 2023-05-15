import { z } from "zod";
import { realEstateSchema } from "./realEstate.schema";
import { userSchema } from "./users.schemas";

const scheduleSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstate: realEstateSchema,
    user: userSchema
});

const scheduleSchemaRequest = scheduleSchema.omit({
    id: true,
    user: true,
    realEstate: true
}).extend({
    realEstateId: z.number()
});

const manySchedulesSchemaResponse = z.array(scheduleSchema);

export {
    scheduleSchema,
    scheduleSchemaRequest,
    manySchedulesSchemaResponse
}