import { Request, Response } from "express";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import { TManyRealEstatesResponse, TRealEstateRequest } from "../interfaces/realEstate.interfaces";
import listRealEstateService from "../services/realEstate/listRealEstate.service";

const createRealEstateController = async (request: Request, response: Response): Promise<Response> => {
    const realEstateData: TRealEstateRequest = request.body;

    const { foundCategory } = response.locals;

    const newRealEstate = await createRealEstateService(realEstateData, foundCategory)


    return response.status(201).json(newRealEstate);
};

const listRealEstateController = async (request: Request, response: Response): Promise<Response> => {
    const listRealEstates: TManyRealEstatesResponse = await listRealEstateService()

    return response.json(listRealEstates)
};

export { createRealEstateController, listRealEstateController }