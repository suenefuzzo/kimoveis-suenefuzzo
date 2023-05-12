import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config"

const createTokenService = async (loginData: TLoginRequest): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
        where: {
            email: loginData.email
        }
    });

    if(!user){
        throw new AppError("Invalid credentials", 401)
    };

    const matchPassword = await compare(loginData.password, user.password);

    if(!matchPassword){
        throw new AppError("Invalid credentials", 401);
    };

    const token = jwt.sign({}, process.env.SECRET_KEY!, {
        expiresIn: "24h",
        subject: user.id.toString()
    });

    return token;
};

export default createTokenService;