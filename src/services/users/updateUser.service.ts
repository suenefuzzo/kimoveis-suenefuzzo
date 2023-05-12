import { Repository } from "typeorm";
import { TUserResponse, TUserUpdateRequest } from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";

const updateUserService = async (userData: TUserUpdateRequest, userId: number): Promise<TUserResponse> => {
     const userRepository: Repository<User> = AppDataSource.getRepository(User);

     const oldData: User | null = await userRepository.findOneBy({
       id: userId
     });

     const newData: User = userRepository.create({
        ...oldData,
        ...userData
     })

     await userRepository.save(newData);

     const returnUser: TUserResponse = userSchemaResponse.parse(newData);

     return returnUser;
};

export default updateUserService;