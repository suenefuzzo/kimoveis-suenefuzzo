import { z } from "zod";

const scheduleSchema = z.object({
    id: z.number(),
    date: z.date(),
    hour: z.string(),
    realEstate: z.number().int(),
    user: z.number().int()
});

const scheduleSchemaRequest = scheduleSchema.omit({
    id: true,
    user: true
})

const schedulesSchemaResponse = z.array(scheduleSchema)

export {
    scheduleSchema,
    scheduleSchemaRequest,
    schedulesSchemaResponse
}