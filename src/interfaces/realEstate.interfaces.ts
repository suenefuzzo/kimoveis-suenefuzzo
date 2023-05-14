import { z } from "zod";
import { manyRealEstatesSchemaResponse, realEstateSchema, realEstateSchemaRequest } from "../schemas/realEstate.schema";


type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;

type TRealEstateResponse = z.infer<typeof realEstateSchema>;

type TManyRealEstatesResponse = z.infer<typeof manyRealEstatesSchemaResponse>

export { TRealEstateRequest, TRealEstateResponse, TManyRealEstatesResponse }