// import { Request, Response } from "express";
// // import createRealEstateService from "../services/realEstate/createRealEstate.service";
// import { TRealEstateRequest } from "../interfaces/realEstate.interfaces";

// const createRealEstateController = async (request: Request, response: Response): Promise<Response> => {
//     const realEstateData: TRealEstateRequest = request.body;

//     const newRealEstate = await createRealEstateService(realEstateData)

//     return response.status(201).json(newRealEstate);
// };

// export { createRealEstateController }