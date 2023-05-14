import { z } from "zod";
import { realEstateSchemaRequest, realEstateSchemaResponse, realEstatesSchemaResponse } from "../schemas/realEstate.schema";

type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;

type TRealEstateResponse = z.infer<typeof realEstateSchemaResponse>;

type TRealEstatesSchemaResponse = z.infer<typeof realEstatesSchemaResponse>

export { TRealEstateRequest, TRealEstateResponse, TRealEstatesSchemaResponse }