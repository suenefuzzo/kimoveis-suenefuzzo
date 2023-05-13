import { z } from "zod";
import { categoriesSchemaResponse, categorySchema, categorySchemaRequest } from "../schemas/categories.schemas";

type TCategory = z.infer<typeof categorySchema>;
type TCategoryRequest = z.infer<typeof categorySchemaRequest>;
type TCategoryResponse = z.infer<typeof categorySchema>;
type TCategoriesReponse = z.infer<typeof categoriesSchemaResponse>;

export {
    TCategory,
    TCategoryRequest,
    TCategoryResponse,
    TCategoriesReponse
}