import { z } from "zod";
import { manyRealEstatesSchemaResponse, realEstateScheduleSchemaResponse, realEstateSchema, realEstateSchemaRequest } from "../schemas/realEstate.schema";

type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;
type TRealEstateResponse = z.infer<typeof realEstateSchema>;
type TManyRealEstatesResponse = z.infer<typeof manyRealEstatesSchemaResponse>
type TRealEstateScheduleResponse = z.infer<typeof realEstateScheduleSchemaResponse>

export { TRealEstateRequest, TRealEstateResponse, TManyRealEstatesResponse, TRealEstateScheduleResponse }