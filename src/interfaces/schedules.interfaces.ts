import { z } from "zod";
import { scheduleSchema, scheduleSchemaRequest } from "../schemas/schedules.schemas";
import { manyRealEstatesSchemaResponse } from "../schemas/realEstate.schema";

type TSchedulesRequest = z.infer<typeof scheduleSchemaRequest>;
type TScheduleReponse = z.infer<typeof scheduleSchema>;
type TManyScheduleResponse = z.infer<typeof manyRealEstatesSchemaResponse>;

export {
    TSchedulesRequest,
    TScheduleReponse,
    TManyScheduleResponse
}