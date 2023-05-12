import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { usersSchemaResponse } from "../../schemas/users.schemas";

const listUsersService =async (): Promise<TUserResponse[]> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const users: User[] | null = await userRepository.find();

    const validUser: TUserResponse[] = usersSchemaResponse.parse(users)

    return validUser;
};

export default listUsersService;