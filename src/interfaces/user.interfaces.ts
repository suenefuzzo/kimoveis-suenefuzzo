import { z } from "zod";
import {
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserUpdateRequest = DeepPartial<TUserRequest>;
type TUsersResponse = z.infer<typeof usersSchemaResponse>

export { 
    TUserRequest, 
    TUserResponse, 
    TUserUpdateRequest,
    TUsersResponse 
};
