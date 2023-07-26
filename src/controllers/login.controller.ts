import { Request, Response } from "express";
import { TLoginRequest } from "../interfaces/login.interfaces";
import createTokenService from "../services/login/createToken.service";

const createTokenController = async (request: Request, response: Response): Promise<Response> => {
    const loginData: TLoginRequest = request.body;
    const token = await createTokenService(loginData);
    return response.json({token});
};

export default createTokenController;
