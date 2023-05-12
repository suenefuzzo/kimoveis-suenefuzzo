import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { TUserRequest } from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";

const createUserService =async (userData: TUserRequest): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User = userRepository.create(userData); 
    await userRepository.save(user);

    const returnUser: TUserResponse = userSchemaResponse.parse(user)

    return returnUser;
};

export default createUserService;